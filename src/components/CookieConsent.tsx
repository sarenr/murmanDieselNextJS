"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем, не соглашался ли пользователь уже
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0  z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col space-y-4">
             <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Мы используем cookies</h3>
              <p className="text-gray-300 text-sm">
                Этот сайт использует cookies для улучшения работы сервиса. 
                Продолжая использовать сайт, вы соглашаетесь с нашей 
                {/* на ссылке стоит заглушка  */}
                <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline ml-1">
                  политикой конфиденциальности
                </a>.
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={acceptCookies}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Принять
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Отклонить
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}