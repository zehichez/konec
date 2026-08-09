import React, { useState } from 'react';
import './Menu.css';

const Cart = ({ cart, onRemoveItem, onClearCart, onUpdateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  const [showConfirm, setShowConfirm] = useState(false);

  const handleClearCart = () => {
    setShowConfirm(true);
  };

  const confirmClear = () => {
    onClearCart();
    setShowConfirm(false);
  };

  const cancelClear = () => {
    setShowConfirm(false);
  };

  if (cart.length === 0) {
    return (
      <div className="cart empty">
        <h3>Корзина</h3>
        <p>Ваша корзина пуста. Загляните в меню!</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Корзина</h3>

      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="cart-info">
              <span className="cart-name">{item.name}</span>
              {item.quantity && item.quantity > 1 && (
                <span className="cart-quantity" style={{ fontSize: '0.85rem', color: '#666' }}>
                  × {item.quantity}
                </span>
              )}
            </div>

            <div className="cart-actions">
              <span className="cart-price">{item.price} ₽</span>

              {onUpdateQuantity && (
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    className="cart-remove"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    aria-label="Уменьшить количество"
                  >
                    −
                  </button>
                  <span style={{ fontWeight: 600 }}>{item.quantity || 1}</span>
                  <button
                    className="cart-remove"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    aria-label="Увеличить количество"
                  >
                    +
                  </button>
                </div>
              )}

              <button
                className="cart-remove"
                onClick={() => onRemoveItem(item.id)}
                aria-label="Удалить товар"
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-total">
        <strong>Итого: {total.toFixed(2)} ₽</strong>
      </div>

      <button className="cart-checkout" onClick={handleClearCart}>
        Оформить заказ
      </button>

      {showConfirm && (
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
            padding: '20px 24px',
            borderRadius: '12px',
            maxWidth: '360px',
            width: '100%',
          }}>
            <p style={{ margin: '0 0 16px 0' }}>
              Вы уверены, что хотите оформить заказ и очистить корзину?
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={cancelClear}
                style={{
                  flex: 1,
                  padding: '8px',
                  border: '1px solid #ccc',
                  background: '#f5f5f5',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Отмена
              </button>
              <button
                onClick={confirmClear}
                style={{
                  flex: 1,
                  padding: '8px',
                  background: '#2c1e16',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Подтвердить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
