import React, { useState } from 'react';
import Cart from './Cart';
import './Menu.css';

const coffeeAndDrinks = [
  {
    id: 1,
    name: 'Эспрессо',
    price: 250,
    desc: 'Классический крепкий кофе',
    image: 'https://i-coffee.me/wp-content/uploads/2021/08/ChatGPT-Image-25-apr.-2026-g.-19_11_30.png',
  },
  {
    id: 2,
    name: 'Капучино',
    price: 350,
    desc: 'Нежная молочная пена и эспрессо',
    image: 'https://s0.rbk.ru/v6_top_pics/media/img/9/69/347794352821699.webp',
  },
  {
    id: 3,
    name: 'Латте',
    price: 250,
    desc: 'Мягкий кофейный напиток',
    image: 'https://avatars.mds.yandex.net/i?id=7c049fa6190a35e52018cb56bb440bde_l-8257574-images-thumbs&n=13',
  },
  {
    id: 4,
    name: 'Мокко',
    price: 350,
    desc: 'Кофе, шоколад и молоко',
    image: 'https://avatars.mds.yandex.net/i?id=356c3f006b9a32028b0f4a1a07e0d21b_l-7092330-images-thumbs&n=13',
  },
  {
    id: 5,
    name: 'Американо',
    price: 350,
    desc: 'Крепкий кофе',
    image: 'https://avatars.mds.yandex.net/i?id=8d0ecaceff29d1661416b8dd06ddb905_l-12753003-images-thumbs&n=13',
  },
  {
    id: 6,
    name: 'Какао',
    price: 150,
    desc: 'Шоколад и молоко',
    image: 'https://jz9czo0xs6.ru.scalesta-cdn.com/2IKuC_ETZAz4z9wijYuebPHejlo=/filters:format(webp)/https://complexbar.ru/images/blog/246/pryaniy-kakao.jpg',
  },
];

const pastries = [
  {
    id: 7,
    name: 'Круассан классический',
    price: 180,
    desc: 'Хрустящий круассан из слоёного теста',
    image: 'https://avatars.mds.yandex.net/i?id=1273654f082e1abee603acc09470a524_l-4444125-images-thumbs&n=13',
  },
  {
    id: 8,
    name: 'Маффин шоколадный',
    price: 220,
    desc: 'Сочный маффин с кусочками шоколада',
    image: 'https://avatars.mds.yandex.net/i?id=39b1dfa884b0e667de35a11d23a82c18_l-4033040-images-thumbs&n=13',
  },
  {
    id: 9,
    name: 'Булочка с корицей',
    price: 190,
    desc: 'Ароматная булочка с корицей и глазурью',
    image: 'https://avatars.mds.yandex.net/i?id=ab0e17cea82e73ebe85863f1564af61a13b874fa-8456725-images-thumbs&n=13',
  },
  {
    id: 10,
    name: 'Кекс лимонный',
    price: 210,
    desc: 'Воздушный кекс с лимонной цедрой',
    image: 'https://img.povar.ru/mobile/3e/b6/23/4b/vlajnie_limonnie_keksi-815570.jpeg',
  },
  {
    id: 11,
    name: 'Чизкейк Нью-Йорк',
    price: 320,
    desc: 'Нежный чизкейк на песочной основе',
    image: 'https://avatars.mds.yandex.net/i?id=3cb6ebd8fbe7302396524cf466595323_l-12597979-images-thumbs&n=13',
  },
  {
    id: 12,
    name: 'Печенье с шоколадной крошкой',
    price: 160,
    desc: 'Тёплое домашнее печенье с шоколадом',
    image: 'https://avatars.mds.yandex.net/i?id=18fa93175cec4dca9993182e55ef4e4d496e54d5-5476568-images-thumbs&n=13',
  },
];

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3 className="modal-title">Ваш заказ оформлен!</h3>
        <p className="modal-text">Спасибо, мы скоро свяжемся с вами для подтверждения.</p>
        <button onClick={onClose} className="modal-btn">
          Закрыть
        </button>
      </div>
    </div>
  );
};

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        // Увеличиваем количество, если товар уже есть
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Иначе добавляем новый товар с количеством 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Меню кофейни</h2>

      <section className="category-section">
        <h3 className="category-title">Напитки</h3>
        <div className="items-grid">
          {coffeeAndDrinks.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <h4 className="item-name">{item.name}</h4>
              <p className="item-desc">{item.desc}</p>
              <div className="item-footer">
                <span className="item-price">{item.price} ₽</span>
                <button
                  onClick={() => addToCart(item)}
                  className="add-to-cart-btn"
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="category-section">
        <h3 className="category-title">Выпечка и десерты</h3>
        <div className="items-grid">
          {pastries.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="item-image" />
              <h4 className="item-name">{item.name}</h4>
              <p className="item-desc">{item.desc}</p>
              <div className="item-footer">
                <span className="item-price">{item.price} ₽</span>
                <button
                  onClick={() => addToCart(item)}
                  className="add-to-cart-btn"
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cart cart={cart} onRemoveItem={removeFromCart} onClearCart={clearCart} />

      <OrderModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Menu;
