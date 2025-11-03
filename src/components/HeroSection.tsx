"use client";
import { useFormModal } from "@/components/useFormModal";
import Image from "next/image";



export default function HeroSection() {
   const {
      isFormOpen,
      formData,
      errors,
      openFormWithService,
      closeForm,
      handleInputChange,
      handleSubmit,
      setPhone,
      handlePhonePaste,
      handleSubmitCallback,
      openCallbackForm,
      isCallbackOpen,
      isSubmitting
    } = useFormModal();
  
    // Нажатие кнопки в шапке: открываем общую модалку, проставив «источник»
    const openHeroForm = () => openFormWithService("Заявка из шапки");
    const openCBForm = () =>  openCallbackForm("Заявка из шапки");

  return (
    <>
      <div className="relative h-screen">
        {/* Фоновое видео */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/vehicle.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео тег.
        </video>

        {/* Overlays поверх видео */}
        <div className="absolute inset-0 z-0">
          {/* Базовый лёгкий слой */}
          <div className="absolute inset-0 bg-black/35" />
          {/* Градиент сверху вниз для читаемости */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
          {/* Виньетка по краям */}
          <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(75%_75%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Контент */}
        <div
          className="absolute inset-0 flex items-start 
                pt-40 
                sm:pt-80 
                md:pt-90
                lg:items-center lg:pt-0 lg:pl-12 
                xl:pl-48   
                2xl:pl-48  
                px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl w-full">
            {/* Кнопки и адрес */}
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4
                         md:mb-6"
            >
               <button 
                className="flex items-center justify-center gap-3 px-4 py-2 text-white bg-primary hover:bg-primary/90 rounded-3xl transition-colors text-sm whitespace-nowrap drop-shadow-lg"
                onClick={() => window.location.href = "tel:+79113001755"}>
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/phone-icon.svg" 
                    alt="Телефон"
                    width={20}
                    height={20}
                  />
                </div>
              
                <span>+7 911 300-17-55</span>
              </button>
              <button 
                className="flex items-center justify-center gap-3 px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded-3xl transition-colors text-sm whitespace-nowrap drop-shadow-lg"
                onClick={() => {
                    openCBForm();
                  }}
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/images/paper-plane.svg" 
                    alt="Телефон"
                    width={20}
                    height={20}
                  />
                </div>
                Обратный звонок
              </button>
              <p className="text-white text-sm mt-2 sm:mt-0 sm:ml-4 drop-shadow-md">
                г. Мурманск улица Кооперативная 4/4
              </p>
            </div>

            {/* Заголовок */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-2xl">
              Качественный ремонт и диагностика дизельных двигателей
            </h1>

            {/* Список услуг */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-blue-600/10 text-white px-4 py-2 rounded-xl text-sm sm:text-base font-medium backdrop-blur-sm border border-blue-400/30">
                Профессиональная диагностика форсунок
              </span>
              <span className="bg-blue-600/10 text-white px-4 py-2 rounded-xl text-sm sm:text-base font-medium backdrop-blur-sm border border-blue-400/30">
                Кодирование и ремонт форсунок
              </span>
              <span className="bg-blue-600/10 text-white px-4 py-2 rounded-xl text-sm sm:text-base font-medium backdrop-blur-sm border border-blue-400/30">
                Обучение впрыска топливных систем
              </span>
              <span className="bg-blue-600/10 text-white px-4 py-2 rounded-xl text-sm sm:text-base font-medium backdrop-blur-sm border border-blue-400/30">
                Ремонт турбин
              </span>
            </div>

            {/* Кнопка CTA */}
            <button 
              className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-3xl transition-colors text-sm md:text-base drop-shadow-xl"
              onClick={() => {
                    openHeroForm();
                    
                  }}
            > 
              Оставить заявку
            </button>
          </div>
        </div>
      </div>

      {/* Форма основной заявки */}
      
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black text-white w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-center relative">
                {/* Кнопка закрытия */}
               <button
                  onClick={closeForm}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full"
                  aria-label="Закрыть окно"
                >
                  ×
                </button>

                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                    Узнать стоимость ремонта за 5 минут
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Оставьте заявку прямо сейчас, мы свяжемся с Вами и сообщим
                    стоимость ремонта!
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 max-w-2xl mx-auto"
                >
                  {/* Имя */}
                   <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-base sm:text-lg font-medium mb-2 text-left"
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  {/* Телефон — с нормализацией и защитой paste */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      Контактный телефон
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setPhone(e.target.value)} // нормализация → +7XXXXXXXXXX
                      onPaste={handlePhonePaste}                  // чистим вставки
                      placeholder="+7ХХХХХХХХХХ"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={12}                 // "+7" + 10 цифр
                      pattern={"^\\+7\\d{10}$"}      // нативная проверка браузера
                      required
                      aria-invalid={!!errors.phone}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                  </div>

                  {/* Автомобиль */}
                  <div>
                    <label
                      htmlFor="car"
                      className="block text-white text-base sm:text-lg font-medium mb-2 text-left"
                    >
                      Марка автомобиля и год выпуска
                    </label>
                    <input
                      type="text"
                      id="car"
                      name="car"
                      value={formData.car}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Например: Toyota Camry 2018"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Форма обратного звонка */}
      { isCallbackOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-black text-white w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl">
            <div className="bg-gradient-to-l from-blue-950 via-black to-blue-950 rounded-xl p-6 sm:p-8 relative">
              {/* Кнопка закрытия */}
              <button
                  onClick={closeForm}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full"
                  aria-label="Закрыть окно"
                >
                  ×
                </button>

              {/* Заголовок */}
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Обратный звонок
                </h2>
                <p className="text-gray-300 text-sm">
                  Оставьте свои данные и мы вам перезвоним
                </p>
              </div>
              <form onSubmit={handleSubmitCallback} className="space-y-4">
                {/* Имя */}
                   <div>
                    <label
                      htmlFor="name"
                      className="block text-white text-base sm:text-lg font-medium mb-2 text-left"
                    >
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                 {/* Телефон — с нормализацией и защитой paste */}
                  <div>
                    <label className="block text-white text-base sm:text-lg font-medium mb-2 text-left">
                      Контактный телефон
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setPhone(e.target.value)} // нормализация → +7XXXXXXXXXX
                      onPaste={handlePhonePaste}                  // чистим вставки
                      placeholder="+7ХХХХХХХХХХ"
                      autoComplete="tel"
                      inputMode="numeric"
                      maxLength={12}                 // "+7" + 10 цифр
                      pattern={"^\\+7\\d{10}$"}      // нативная проверка браузера
                      required
                      aria-invalid={!!errors.phone}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                  </div>

                {/* Сообщение */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 text-left">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Ваше сообщение (необязательно)"
                    rows={3}
                  />
                </div>

                {/* Кнопки */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg"
                  >
                    {isSubmitting ? "Отправка..." : "Отправить заявку"}
                  </button>
                </form>
              </div>
            </div>
            </div>
      )}
    </>
  );
}