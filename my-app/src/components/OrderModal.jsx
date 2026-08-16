import React from 'react';

const OrderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-icon"></div>

        <h2 className="modal-title">Заказ оформлен!</h2>
        <p className="modal-message">
          Спасибо за покупку! Мы скоро свяжемся с вами.
        </p>

        <button onClick={onClose} className="modal-btn">
          Понятно
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
