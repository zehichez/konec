import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'error', 'success', 'pending'
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('info'); // 'info' или 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setModalMessage('Пожалуйста, заполните все поля.');
      setModalType('error');
      setShowConfirmModal(true);
      return;
    }

    setStatus('pending');
    setModalMessage(
      'Вы подтверждаете, что согласны на передачу ваших данных для обработки?'
    );
    setModalType('confirm');
    setShowConfirmModal(true);
  };

  const handleConfirm = (confirmed) => {
    setShowConfirmModal(false);

    if (!confirmed) {
      setStatus('error');
      setModalMessage('Сообщение не отправлено');
      setModalType('error');
      setShowConfirmModal(true);
      return;
    }

    console.log('Данные формы:', formData);

    setStatus('success');
    setModalMessage('Мы ответим вам в течение 3 рабочих дней');
    setModalType('info');
    setShowConfirmModal(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Свяжитесь с нами</h2>

        <div className="contact-grid">
          <div className="contact-info-block">
            <div className="contact-info">
              <div>
                <h3>Адрес</h3>
                <p>г. Краснодар, ул. Тюляева</p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h3>Телефон</h3>
                <p>
                  <a href="tel:+79183235032" style={{ color: '#2c1e16', textDecoration: 'none' }}>
                    +7 (918) 323-50-32
                  </a>
                </p>
              </div>
              <div style={{ marginTop: '20px' }}>
                <h3>Часы работы</h3>
                <p>Пн–Вс: 08:00 – 22:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-block">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Ваше имя</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@mail.ru"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Расскажите, чем мы можем помочь…"
                />
              </div>

              <button type="submit" className="submit-btn">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{modalType === 'confirm' ? 'Подтверждение' : 'Внимание'}</h3>
            <p>{modalMessage}</p>
            {modalType === 'confirm' ? (
              <div className="modal-actions">
                <button
                  onClick={() => handleConfirm(false)}
                  className="btn-secondary"
                >
                  Нет
                </button>
                <button
                  onClick={() => handleConfirm(true)}
                  className="btn-primary"
                >
                  Да
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowConfirmModal(false)}
                className="btn-primary"
              >
                OK
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
