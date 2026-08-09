import React, { useState } from 'react';
import Cart from './Cart';
import './Menu.css';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        background: '#fff',
        padding: '32px',
        borderRadius: '16px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center',
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#2c1e16' }}>
          Ваш заказ оформлен!
        </h3>
        <p style={{ color: '#555', marginBottom: '24px' }}>
          Спасибо, мы скоро свяжемся с вами для подтверждения.
        </p>
        <button
          onClick={onClose}
          style={{
            background: '#2c1e16',
            color: '#fff',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};

const coffeeAndDrinks = [
  { id: 1, name: 'Эспрессо', price: 250, desc: 'Классический крепкий кофе', image: 'https://i-coffee.me/wp-content/uploads/2021/08/ChatGPT-Image-25-apr.-2026-g.-19_11_30.png' },
  { id: 2, name: 'Капучино', price: 350, desc: 'Нежная молочная пена и эспрессо', image: 'https://s0.rbk.ru/v6_top_pics/media/img/9/69/347794352821699.webp' },
  { id: 3, name: 'Латте', price: 250, desc: 'Мягкий кофейный напиток', image: 'https://avatars.mds.yandex.net/i?id=7c049fa6190a35e52018cb56bb440bde_l-8257574-images-thumbs&n=13' },
  { id: 4, name: 'Мокко', price: 350, desc: 'Кофе, шоколад и молоко', image: 'https://avatars.mds.yandex.net/i?id=356c3f006b9a32028b0f4a1a07e0d21b_l-7092330-images-thumbs&n=13' },
  { id: 5, name: 'Американо', price: 350, desc: 'Крепкий кофе', image: 'https://avatars.mds.yandex.net/i?id=8d0ecaceff29d1661416b8dd06ddb905_l-12753003-images-thumbs&n=13' },
  { id: 6, name: 'Какао', price: 150, desc: 'Шоколад и молоко', image: 'https://jz9czo0xs6.ru.scalesta-cdn.com/2IKuC_ETZAz4z9wijYuebPHejlo=/filters:format(webp)/https%3A%2F%2Fcomplexbar.ru%2Fimages%2Fblog%2F246%2Fpryaniy-kakao.jpg' },
];

const pastries = [
  { id: 7, name: 'Круассан классический', price: 180, desc: 'Хрустящий круассан из слоёного теста', image: 'https://avatars.mds.yandex.net/i?id=1273654f082e1abee603acc09470a524_l-4444125-images-thumbs&n=13' },
  { id: 8, name: 'Маффин шоколадный', price: 220, desc: 'Сочный маффин с кусочками шоколада', image: 'https://avatars.mds.yandex.net/i?id=39b1dfa884b0e667de35a11d23a82c18_l-4033040-images-thumbs&n=13' },
  { id: 9, name: 'Булочка с корицей', price: 190, desc: 'Ароматная булочка с корицей и глазурью', image: 'https://avatars.mds.yandex.net/i?id=ab0e17cea82e73ebe85863f1564af61a13b874fa-8456725-images-thumbs&n=13' },
  { id: 10, name: 'Кекс лимонный', price: 210, desc: 'Воздушный кекс с лимонной цедрой', image: 'https://img.povar.ru/mobile/3e/b6/23/4b/vlajnie_limonnie_keksi-815570.jpeg' },
  { id: 11, name: 'Чизкейк Нью-Йорк', price: 320, desc: 'Нежный чизкейк на песочной основе', image: 'https://avatars.mds.yandex.net/i?id=3cb6ebd8fbe7302396524cf466595323_l-12597979-images-thumbs&n=13' },
  { id: 12, name: 'Печенье с шоколадной крошкой', price: 160, desc: 'Тёплое домашнее печенье с шоколадом', image: 'https://avatars.mds.yandex.net/i?id=18fa93175cec4dca9993182e55ef4e4d496e54d5-5476568-images-thumbs&n=13' },
];

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
        );
      }
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
      <h2>Меню кофейни</h2>

      <section className="category-section">
        <h3 className="category-title">Напитки</h3>
        <div className="items-grid">
          {coffeeAndDrinks.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(item.name)}`;
                  }}
                />
              </div>
              <h3>{item.name}</h3>
              <p className="item-desc">{item.desc}</p>
              <div className="item-footer">
                <span className="item-price">{item.price} ₽</span>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
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
              <div className="item-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="item-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x200?text=${encodeURIComponent(item.name)}`;
                  }}
                />
              </div>
              <h3>{item.name}</h3>
              <p className="item-desc">{item.desc}</p>
              <div className="item-footer">
                <span className="item-price">{item.price} ₽</span>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cart
        cart={cart}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
      />

      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Menu;
