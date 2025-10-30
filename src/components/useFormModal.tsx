import { useState, ChangeEvent, FormEvent } from "react";
import { z } from "zod";


/** ============================
 * 1) Валидация через Zod
 * ============================ **/
const formSchema = z.object({
  name: z.string().min(2, "Имя слишком короткое"),
  email: z.string().email("Введите корректный e-mail"),
  // строго E.164 для РФ: +7 и 10 цифр
  phone: z.string().regex(/^\+7\d{10}$/, "Телефон должен быть в формате +79991234567"),
  comment: z.string().max(1000, "Слишком длинный комментарий").optional().or(z.literal("")),
  file: z.instanceof(File).nullable().optional(),
  service: z.string().min(1, "Выберите услугу"),


   car: z.string().max(100).optional().or(z.literal("")),
});

export type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

/** ============================
 * 2) Нормализация телефона
 * - убираем всё, кроме цифр
 * - 8XXXXXXXXXX -> +7XXXXXXXXXX
 * - ограничиваем 10 цифрами после +7
 * - допускаем очистку до пустой строки
 * ============================ **/
function normalizePhone(raw: string) {
  if (!raw || raw.trim() === "") return "";

  // берём только цифры
  let d = raw.replace(/\D/g, "");

  // если начинается с 8 — считаем это РФ и меняем на 7
  if (d.startsWith("8")) d = "7" + d.slice(1);

  // если начинается с 7 — убираем её и оставляем 10 локальных цифр
  if (d.startsWith("7")) d = d.slice(1);

  // ограничиваем 10 цифрами и собираем формат +7XXXXXXXXXX
  return "+7" + d.slice(0, 10);
}

/** ============================
 * 3) Хук
 * ============================ **/
export const useFormModal = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comment: "",
    file: null,
    service: "",
    car: "", 
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /** Универсальный onChange с веткой для phone:
   *  - все поля как раньше
   *  - для телефона — нормализация
   */
  const handleInputChange = <
    T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(e: ChangeEvent<T>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setPhone(value); // используем спец-setter (см. ниже)
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

  /** Спец-setter для телефона:
   *  - нормализуем
   *  - чистим ошибку поля
   */
  const setPhone = (value?: string) => {
    const normalized = normalizePhone(value ?? "");
    setFormData((p) => ({ ...p, phone: normalized }));
    setErrors((prev) => ({ ...prev, phone: undefined }));
  };

  /** Сабмит с валидацией Zod */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = formSchema.safeParse(formData);
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

    const payload = { ...result.data };
    console.log("Форма отправлена:", payload);

    // сброс
    setIsSubmitting(false);
    setIsFormOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
      file: null,
      service: "",
      car: "",
    });
  };

  /** Управление модалкой */
  const openFormWithService = (service: string) => {
    setFormData((prev) => ({ ...prev, service }));
    setErrors({});
    setIsFormOpen(true);
  };

  const closeForm = () => setIsFormOpen(false);

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      comment: "",
      file: null,
      service: "",
      car: "",
    });

  /** Доп: обработчик paste для телефона
   *  чтобы длинные/грязные вставки тоже чистились
   */
  const handlePhonePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    setPhone(text);
  };

  return {
    // state
    isFormOpen,
    formData,
    errors,
    isSubmitting,

    // controls
    openFormWithService,
    closeForm,
    resetForm,

    // handlers
    handleInputChange,
    handleFileChange,
    handleSubmit,
    setPhone,
    handlePhonePaste,
  };
};
