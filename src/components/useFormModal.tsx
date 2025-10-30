import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";

/** ========= 1) Схемы валидации под два сценария ========= */
const mainSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  email: z.string().email("Введите корректный e-mail"),
  phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
  comment: z.string().max(1000, "Слишком длинный комментарий").optional().or(z.literal("")),
  file: z.instanceof(File).nullable().optional(),
  service: z.string().min(1, "Выберите услугу"),
  car: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(100).optional().or(z.literal("")),
});

const callbackSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
  // Остальные поля по желанию сценария — опциональные:
  email: z.string().email().optional().or(z.literal("")),
  comment: z.string().max(1000).optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  car: z.string().max(100).optional().or(z.literal("")),
  message: z.string().max(100).optional().or(z.literal("")),
  file: z.instanceof(File).nullable().optional(),
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
    file: null,
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
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
    setErrors((prev) => ({ ...prev, file: undefined }));
  };

  /** Телефон */
  const setPhone = (value?: string) => {
    const normalized = normalizePhone(value ?? "");
    setFormData((p) => ({ ...p, phone: normalized }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  /** Общая функция сабмита с переданной схемой */
  const submitWithSchema = async (
    e: FormEvent,
    schema: typeof mainSchema | typeof callbackSchema
  ) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = schema.safeParse(formData);
    if (!result.success) {
      const flat = result.error.flatten().fieldErrors;
      const fieldErrors: FormErrors = {};
      (Object.keys(flat) as (keyof FormData)[]).forEach((k) => {
        const msg = flat[k]?.[0];
        if (msg) fieldErrors[k] = msg;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = { ...result.data, modalKind }; // знаем откуда пришла заявка
    console.log("Форма отправлена:", payload);

    // сброс
    setIsSubmitting(false);
    setModalKind(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
      file: null,
      service: "",
      car: "",
      message: "",
    });
  };

  /** ДВА обработчика сабмита под разные кнопки */
  const handleSubmit = (e: FormEvent) => submitWithSchema(e, mainSchema);
  const handleSubmitCallback = (e: FormEvent) => submitWithSchema(e, callbackSchema);

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
      file: null,
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
    handleFileChange,
    handleSubmit,
    handleSubmitCallback,
    setPhone,
    handlePhonePaste,
  };
};
