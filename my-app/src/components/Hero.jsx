import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleOrderClick = () => {
    console.log('Нажата кнопка “Заказать столик”');

    alert('Скоро откроется форма бронирования столика!');
  };

  return (
    <section
      className="hero"
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
