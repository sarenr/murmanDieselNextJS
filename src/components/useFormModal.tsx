import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  comment: string;
  file: File | null;
  service: string;
}

export const useFormModal = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    comment: "",
    file: null,
    service: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length === 0) return "+7 (";
    if (numbers.length <= 1) return `+7 (${numbers}`;
    if (numbers.length <= 4) return `+7 (${numbers.slice(1)}`;
    if (numbers.length <= 7)
      return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
    if (numbers.length <= 9)
      return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(
        4,
        7
      )}-${numbers.slice(7, 9)}`;
    return `+7 (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(
      7,
      9
    )}-${numbers.slice(9, 11)}`;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedPhone = formatPhone(value);
    setFormData((prev) => ({
      ...prev,
      phone: formattedPhone,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    setIsFormOpen(false);
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      comment: "", 
      file: null,
      service: "" 
    });
  };

  const openFormWithService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      service,
    }));
    setIsFormOpen(true);
  };

  const closeForm = () => setIsFormOpen(false);
  
  const resetForm = () => setFormData({ 
    name: "", 
    email: "", 
    phone: "", 
    comment: "", 
    file: null,
    service: "" 
  });

  return {
    isFormOpen,
    formData,
    openFormWithService,
    closeForm,
    resetForm,
    handleInputChange,
    handleFileChange,
    handlePhoneChange,
    handleSubmit,
  };
};