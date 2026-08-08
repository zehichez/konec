import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleOrderClick = () => {
    // Сюда потом подключишь модальное окно или переход на страницу бронирования
    console.log('Нажата кнопка “Заказать столик”');

    // Пример: можно открыть alert, а лучше — показать своё модальное окно
    alert('Скоро откроется форма бронирования столика!');
  };

  return (
    <section
      className="hero"
      // Раскомментируй эту строку, если хочешь фоновое фото:
      // style={{ backgroundImage: 'url(/images/hero-coffee.jpg)' }}
    >
      <div className="hero-content">
        <h1>Добро пожаловать в Vespars</h1>
        <p>Кофе, где уютно и вкусно — каждый день и для каждого.</p>
        <button
          className="cta-button"
          onClick={handleOrderClick}
          aria-label="Заказать столик в кофейне Vespars"
        >
          Заказать столик
        </button>
      </div>
    </section>
  );
};

export default Hero;
