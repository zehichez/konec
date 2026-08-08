import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('user');

  if (!username) {
    navigate('/login');
    return null;
  }

  return (
    <div className="app-container">
      <h1>Личный кабинет</h1>
      <p>Привет, {username}! Это твоя защищенная страница.</p>
      <button 
        onClick={() => {
          localStorage.removeItem('user');
          navigate('/login');
        }}
        style={{
          padding: '10px 20px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Выйти
      </button>
    </div>
  );
};

export default Dashboard;
