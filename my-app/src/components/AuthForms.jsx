import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthForms = () => {
  const [mode, setMode] = useState('login'); 
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    if (type === 'register') {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.find(u => u.username === username)) {
        alert('Пользователь уже существует');
        return;
      }
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Регистрация успешна! Теперь войдите.');
      setMode('login');
    } else {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        localStorage.setItem('user', username);
        alert('Вы вошли!');
        setShowForm(false);
        window.location.reload(); 
      } else {
        alert('Неверный логин или пароль');
      }
    }
  };

  return (
    <div className="auth-wrapper">
      {!showForm ? (
        <>
          <button onClick={() => { setMode('login'); setShowForm(true); }}>Войти</button>
          <button onClick={() => { setMode('register'); setShowForm(true); }}>Регистрация</button>
        </>
      ) : (
        <div className="auth-modal">
          <h3>{mode === 'login' ? 'Вход' : 'Регистрация'}</h3>
          <form onSubmit={(e) => handleSubmit(e, mode)}>
            <input type="text" name="username" placeholder="Логин" required />
            <input type="password" name="password" placeholder="Пароль" required />
            <button type="submit">{mode === 'login' ? 'Войти' : 'Зарегистрироваться'}</button>
          </form>
          <button onClick={() => setShowForm(false)} className="close-btn">Закрыть</button>
        </div>
      )}
    </div>
  );
};

export default AuthForms;
