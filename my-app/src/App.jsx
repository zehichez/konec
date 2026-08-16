import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function RequireAuth({ children }) {
  const isLoggedIn = !!localStorage.getItem('user');
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="site-header">
          {/* Vespers теперь кликабельный логотип */}
          <Link to="/" className="logo-link">
            <span className="logo-text">Vespers</span>
          </Link>

          <nav className="main-nav">
            <Link to="/">Главная</Link>
            <Link to="/menu">Меню</Link>
            <Link to="/about">О нас</Link>
            <Link to="/contact">Контакты</Link>
          </nav>

          <div className="auth-container">
            <Link to="/login" className="header-btn btn-login">Войти</Link>
            <Link to="/register" className="header-btn btn-register">Регистрация</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
