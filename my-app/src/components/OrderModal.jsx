import React from 'react';

const OrderModal = ({ isOpen, onClose }) => {
  return (

    <div 
      className="modal-backdrop" 
      onClick={onClose} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >

      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()} 
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '90%',
          transform: isOpen ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          opacity: isOpen ? 1 : 0,
          position: 'relative',
        }}
      >

        <div style={{
          fontSize: '48px',
          marginBottom: '20px',
          color: '#041d04'
        }}>
          
        </div>

        <h2 style={{ margin: '0 0 15px', color: '#333' }}>Заказ оформлен!</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Спасибо за покупку! Мы скоро свяжемся с вами.
        </p>

        <button
          onClick={onClose}
          style={{
            padding: '12px 24px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
        >
          Понятно
        </button>
      </div>
    </div>
  );
};

export default OrderModal;