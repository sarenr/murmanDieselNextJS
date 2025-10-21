export default function FooterSection() {     
    return (
        <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Верхняя часть */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Компания */}
                    <div>
                      <div className="text-center sm:text-left">
                          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">ООО &quot;Мурман - Дизель&quot;</h3>
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                              Мы делаем качественный ремонт Дизельных форсунок
                          </p>
                      </div>
                      {/* VK - не забыть написать актуальный href */}
                      <div className="mt-4">
                                <a 
                                    href="https://vk.com/your-profile"  
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 
                                        8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 
                                        15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 
                                        13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 
                                        16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 
                                        8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 10.96 9.89 12.76 10.38 12.76C10.57 
                                        12.76 10.65 12.66 10.65 12.25V10.03C10.6 9.41 10.07 9.36 10.07 8.71C10.07 8.5 10.21 8.3 10.44 
                                        8.3H12.73C13.04 8.3 13.15 8.5 13.15 8.94V12.02C13.15 12.3 13.28 12.38 13.38 12.38C13.56 12.38 
                                        13.72 12.29 14.05 11.96C15.1 10.54 16.05 8.57 16.05 8.57C16.14 8.4 16.29 8.3 16.53 8.3H17.99C18.37 
                                        8.3 18.47 8.52 18.37 8.85C18.19 9.31 16.41 11.47 16.41 11.47C16.17 11.74 16.08 11.87 16.08 12.08C16.08 
                                        12.39 16.32 12.5 16.63 12.78C17.57 13.63 18.15 14.77 18.15 15.68C18.15 16.04 18.02 16.27 18.15 16.27Z"/>
                                    </svg>
                                </a>
                                <p className="text-xs text-gray-400 mt-2">Мы в VK</p>
                        </div>
                    </div>

                    {/* Навигация */}
                    <div className="text-center sm:text-left sm:pl-0 lg:pl-10">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Разделы сайта</h4>
                        <ul className="space-y-2 sm:space-y-3 text-gray-300">
                            <li>
                                <a href="#main" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#service" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white transition-colors text-sm sm:text-base block py-1">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Адрес */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Адрес</h4>
                        <div className="space-y-2 sm:space-y-3 text-gray-300">
                            <div>
                                <p className="font-medium text-sm sm:text-base">
                                    г. Мурманск, Кооперативная 4/4
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Контактная информация */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Связь</h4>
                        <div className="space-y-2 sm:space-y-3 text-gray-300">
                            <div>
                                <p className="font-medium text-sm sm:text-base">+7 (911) 3001755</p>
                                <p className="text-xs sm:text-sm text-gray-400">Телефон для связи</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base">+79533023022</p>
                                <p className="text-xs sm:text-sm text-gray-400">WhatsApp/Viber</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base leading-tight">
                                    ПН-ПТ 09:00 – 18:00<br />
                                    СБ 10:00 - 17:00<br />
                                    ВС: Выходной
                                </p>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1">Время работы</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть */}
                <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-gray-400">
                    <p className="text-xs sm:text-sm">
                       ООО «Мурман - Дизель». Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
}