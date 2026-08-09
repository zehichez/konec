import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
  
    if (users.find(u => u.username === username)) {
      alert('Пользователь с таким логином уже существует');
      return;
    }


    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Регистрация успешна! Теперь войдите.');
    navigate('/login');
  };

  return (
    <div className="auth-page-container">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Придумайте логин" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Придумайте пароль" 
          required 
        />
        <button type="submit" className="auth-submit-btn">Зарегистрироваться</button>
      </form>
      <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
    </div>
  );
};

export default Register;
