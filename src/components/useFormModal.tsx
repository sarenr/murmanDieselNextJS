import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";
import toast from "react-hot-toast";

/** ========= 1) Схемы валидации под два сценария ========= */
// const fullSchema = z.object({
//   name: z.string()
//   .min(2, "Имя должно содержать минимум 2 буквы!")
//   .regex(/^[А-Яа-яA-Za-zЁё\s'-]+$/, "Имя не должно содержать цифры или спецсимволы!"),
//   phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
//   email: z.email({ message: "Введите корректный email" }),
//   comment: z.string().max(1000, "Слишком длинный комментарий").optional().or(z.literal("")),
//   service: z.string().min(1, "Выберите услугу"),
//   car: z.string()
//   .min(2, "Пожалуйста, укажите марку и модель автомобиля")
//   .max(100),
//   message: z.string().max(100).optional().or(z.literal("")),
// });
const mainSchema = z.object({
  name: z.string()
  .min(2, "Имя должно содержать минимум 2 буквы!")
  .regex(/^[А-Яа-яA-Za-zЁё\s'-]+$/, "Имя не должно содержать цифры или спецсимволы!"),
  phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
  email: z.email({ message: "Введите корректный email" }),
  comment: z.string().max(1000, "Слишком длинный комментарий").optional().or(z.literal("")),
  service: z.string().min(1, "Выберите услугу"),
  car: z.string()
  .min(2, "Пожалуйста, укажите марку и модель автомобиля")
  .max(100),
  message: z.string().max(100).optional().or(z.literal("")),
});
const callbackSchema = z.object({
  name: z.string()
  .min(2, "Имя должно содержать минимум 2 буквы")
  .regex(/^[А-Яа-яA-Za-zЁё\s'-]+$/, "Имя не должно содержать цифры или спецсимволы"),
  phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
  message: z.string().max(100).optional().or(z.literal("")),
});

const  applicationSchema = z.object({
  name: z.string()
  .min(2, "Имя должно содержать минимум 2 буквы")
  .regex(/^[А-Яа-яA-Za-zЁё\s'-]+$/, "Имя не должно содержать цифры или спецсимволы"),
  phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
  car: z.string().max(100).min(2, "Пожалуйста, укажите марку и модель автомобиля"),
});

// Тип данных берём по полной схеме
export type FormData = z.infer<typeof mainSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

// Режим модалки
type ModalKind = "main" | "callback" | null;

/** ========= 2) Нормализация телефона ========= */
function normalizePhone(raw: string) {
  if (!raw || raw.trim() === "") return "";
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (d.startsWith("7")) d = d.slice(1);
  return "+7" + d.slice(0, 10);
}

/** ========= 3) Хук ========= */
export const useFormModal = () => {
  // какой модал открыт сейчас
  const [modalKind, setModalKind] = useState<ModalKind>(null);

  // удобные булевы флаги
  const isMainOpen = modalKind === "main";
  const isCallbackOpen = modalKind === "callback";
  const isFormOpen = modalKind !== null;

  // данные формы
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comment: "",
    // file: null,
    service: "",
    car: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /** Универсальный onChange (с веткой для phone) */
  const handleInputChange = <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(e: ChangeEvent<T>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setPhone(value);
      return;
    }
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  /** Файл */
  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   setFormData((prev) => ({ ...prev, file }));
  //   setErrors((prev) => ({ ...prev, file: undefined }));
  // };

  /** Телефон */
  const setPhone = (value?: string) => {
    const normalized = normalizePhone(value ?? "");
    setFormData((p) => ({ ...p, phone: normalized }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  /** Общая функция сабмита с переданной схемой */

const submitWithSchema = async (
  e: FormEvent,
  schema: typeof mainSchema | typeof callbackSchema | typeof applicationSchema
) => {
  e.preventDefault();

  setIsSubmitting(true);
  setErrors({});

  //  Zod-валидация
const parsed = schema.safeParse(formData);
if (!parsed.success) {
  const fieldErrors: FormErrors = {};
  for (const issue of parsed.error.issues) {
    const key = issue.path[0];
    if (typeof key !== "string") continue;
    if (!(key in formData)) continue; 
    if (!fieldErrors[key as keyof FormData]) {
      fieldErrors[key as keyof FormData] = issue.message;
    }
  }
  setErrors(fieldErrors);
  setIsSubmitting(false);
  return;
}

  //  отправка
  const dataToSend = { ...parsed.data, modalKind }; 
 try {
  const res = await fetch("/api/telegram", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataToSend),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`/api/telegram ${res.status}: ${text}`);
  }

  console.log("Отправлено в Telegram:", text);
  toast.success("Заявка успешно отправлена!"); 

    // Сброс формы и закрытие модалки
    setModalKind(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
      // file: null,
      service: "",
      car: "",
      message: "",
    });
  } catch (err) {
    console.error("Ошибка отправки в Telegram:", err);
    // сюда можно добавить toast/alert
  } finally {
    setIsSubmitting(false);
  }
};

  /** ДВА обработчика сабмита под разные кнопки */
  const handleSubmit = (e: FormEvent) => submitWithSchema(e, mainSchema);
  const handleSubmitCallback = (e: FormEvent) => submitWithSchema(e, callbackSchema);
  const handleSubmitApplication = (e: FormEvent) => submitWithSchema(e, applicationSchema);

  /** Открывашки */
  const openFormWithService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setErrors({});
    setModalKind("main");
  };

  const openCallbackForm = (serviceLabel = "Обратный звонок") => {
    setFormData((prev) => ({ ...prev, service: serviceLabel }));
    setErrors({});
    setModalKind("callback");
  };

  /** Закрыть/сброс */
  const closeForm = () => setModalKind(null);

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
      // file: null,
      service: "",
      car: "",
      message: "",
    });

  /** Чистка вставки телефона */
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    setPhone(text);
  };

  return {
    // видимость
    isFormOpen,
    isMainOpen,
    isCallbackOpen,

    // данные/ошибки
    formData,
    errors,
    isSubmitting,

    // открытие/закрытие
    openFormWithService,  // для большой формы
    openCallbackForm,     // для обратного звонка
    closeForm,
    resetForm,

    // хендлеры ввода/сабмита
    handleInputChange,
    // handleFileChange,
    handleSubmit,
    handleSubmitApplication,
    handleSubmitCallback,
    setPhone,
    handlePhonePaste,
  };
};
