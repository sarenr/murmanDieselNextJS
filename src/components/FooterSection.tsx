import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {   
    const currentYear = new Date().getFullYear();  
    return (
        <footer className="w-full bg-background/95 backdrop-blur-sm text-foreground py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto p-4 
                                                    sm:p-6 
                                                    lg:p-8 
                                                    xl:p-10
                                   flex flex-col items-center overflow-hidden relative group
            ">
                {/* Верхняя часть */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-40 mb-8 sm:mb-12">
                    {/* Компания */}
                    <div className="overflow-x-auto">
                                    {/* Логотип */}
                                    <div className="flex items-center pb-1">
                                      <Image
                                        src="/images/logo-blue.svg"
                                        alt="Мурман-Дизель"
                                        width={160}
                                        height={150}
                                        className="w-45 h-10 object-cover object-center transition-all duration-300"
                                        priority
                                      />
                                    </div>
                        
                        <h3 className="flex items-end text-lg sm:text-xm font-bold mb-4">ООО &quot;Мурман - Дизель&quot;</h3>
                        {/* </div> */}
                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed mb-4">
                            Мы делаем качественный ремонт Дизельных форсунок
                        </p>
                        {/* VK */}
                        <div className="flex justify-start">
                            <a 
                                    href="https://vk.ru/murmandiesel"  
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                     
                                >
                            <div className="relative w-15 h-15"> 
                                <Image
                                    src="/images/vk.svg"
                                    alt="VK" 
                                    fill
                                    className="hover:scale-110 duration-200"
                                />
                            </div>
                            </a>
                        </div>
                    </div>

                    {/* Навигация */}
                    <div className="text-left">
                        <h4 className="text-base sm:text-lg font-bold mb-4">Разделы сайта</h4>
                        <ul className="space-y-3 text-foreground/70">
                            <li>
                                <a href="#main" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="#service" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="#photo" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1">
                                    Фото
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-foreground transition-colors text-sm sm:text-base block py-1">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Контактная информация */}
                    <div className="text-left">
                        <h4 className="text-base sm:text-lg font-bold mb-4">Связь</h4>
                        <div className="space-y-3 text-foreground/70">
                            <div>
                                <p className="font-medium text-sm sm:text-base">+7 (911) 3001755</p>
                                <p className="text-xs sm:text-sm text-foreground/50">Телефон для связи</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base">+79533023022</p>
                                <p className="text-xs sm:text-sm text-foreground/50">WhatsApp/Viber</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base leading-tight">
                                    ПН-ПТ 09:00 – 18:00<br />
                                    СБ 10:00 - 17:00<br />
                                    ВС: Выходной
                                </p>
                                <p className="text-xs sm:text-sm text-foreground/50 mt-1">Время работы</p>
                            </div>
                            <div>
                                <p className="font-medium text-sm sm:text-base">
                                    г. Мурманск, Кооперативная 4/4
                                </p>
                                <p className="text-xs sm:text-sm text-foreground/50 mt-1">Адрес</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть */}
                    <div className="w-full border-t border-foreground/10 pt-6 sm:pt-8 text-foreground/50">
                    <div className="max-w-7xl mx-auto  flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-center sm:text-left">
                        
                        {/* Левая часть */}
                        <p className="text-foreground/50">
                        {currentYear} &copy; ООО "Мурман-Дизель" — Все права защищены
                        </p>

                        {/* Правая часть */}
                        <div className="flex items-center justify-center sm:justify-end gap-4 text-foreground/60">
                        <Link
                            href="/privacy"
                            className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                        >
                            Политика конфиденциальности
                        </Link>
                        <span className="text-foreground/40 hidden sm:inline">|</span>
                        <Link
                            href="/cookie"
                            className="hover:text-foreground transition-colors underline-offset-4 hover:underline"
                        >
                            Политика использования Cookies
                        </Link>
                        </div>
                    </div>
                    </div>

            </div>
        </footer>
    );
}