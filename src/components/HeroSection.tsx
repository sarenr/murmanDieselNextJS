export default function HeroSection() {
  return ( 
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
      <div className="absolute inset-0 flex items-start 
                pt-40 
                sm:pt-80 
                md:pt-90
                lg:items-center lg:pt-0 lg:pl-12 
                xl:pl-48   
                2xl:pl-48  
                px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          {/* Кнопки и адрес */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4
                         md:mb-6">
            <button className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm whitespace-nowrap drop-shadow-lg">
              +7 911 300-17-55
            </button>
            <button className="px-4 py-2 bg-green-700 hover:bg-green-600 text-white rounded-3xl transition-colors text-sm whitespace-nowrap drop-shadow-lg">
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
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-2 drop-shadow-lg">
            Профессиональная диагностика кодирование и ремонт форсунок
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-2 drop-shadow-lg">
            Обучение впрыска топливных систем
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 drop-shadow-lg">
            Ремонт турбин
          </p>
          
          {/* Кнопка CTA */}
          <button className="font-extrabold bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors text-sm md:text-base drop-shadow-xl">
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}