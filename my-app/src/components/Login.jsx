import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem('user', username);
      navigate('/dashboard'); 
    } else {
      alert('Неверный логин или пароль');
    }
  };

  return (
    <div className="auth-page-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username" 
          placeholder="Ваш логин" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Ваш пароль" 
          required 
        />
        <button type="submit" className="auth-submit-btn">Войти</button>
      </form>
      <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
    </div>
  );
};

export default Login;
