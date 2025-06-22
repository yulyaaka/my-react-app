

/*
// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Modal from './Modal/Modal.tsx';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="page_header header">
      <div>
        <h2>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Jobly
          </Link>
        </h2>
      </div>

      <nav className="header_nav nav">
        <ul className="nav_list">
          <li className="nav_item">
            <Link to="/cards" style={{ textDecoration: 'none', color: 'inherit' }}>
              For Recruiters
            </Link>
          </li>
          <li className="nav_item">
            <button
              onClick={() => setIsModalOpen(true)}
              className="signup-btn"
            >
              Sign Up
            </button>
          </li>
          <li className="nav_item">Log In</li>
        </ul>
      </nav>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Авторизация</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input
                type="email"
                placeholder="example@example.com"
                required
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Пароль:
              <input
                type="password"
                placeholder="••••••••"
                required
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <button type="submit">Войти</button>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
*/


/*
// src/components/Header/Header.tsx
import React, { useState } from 'react';
import Modal from './Modal/Modal.tsx';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="page_header header">
      <div>
        <h2>Jobly</h2>
      </div>

      <nav className="header_nav nav">
        <ul className="nav_list">
          <li className="nav_item">For Recruiters</li>
          <li className="nav_item">
            <button
              onClick={() => setIsModalOpen(true)}
              className="signup-btn"
            >
              Sign Up
            </button>
          </li>
          <li className="nav_item">Log In</li>
        </ul>
      </nav>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Авторизация</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input
                type="email"
                placeholder="example@example.com"
                required
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Пароль:
              <input
                type="password"
                placeholder="••••••••"
                required
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <button type="submit">Войти</button>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
*/





// src/components/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal/Modal.tsx';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="page_header header">
      <div>
        <h2>
          <Link to="/" style={{ textDecoration: 'none' }}> Jobly</Link>
        </h2>
      </div>

      <nav className="header_nav nav">
        <ul className="nav_list">
          <li className="nav_item">For Recruiters</li>
          <li className="nav_item">
            <button onClick={() => setIsModalOpen(true)} className="signup-btn">
              Sign Up
            </button>
          </li>
          <li className="nav_item">
            <Link to="/cards" style={{ textDecoration: 'none' }}>Cards</Link>
          </li>
          <li className="nav_item">
            <Link to="/about" style={{ textDecoration: 'none' }}>About us</Link>
          </li>
          <li className="nav_item">Log In</li>
        </ul>
      </nav>

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Авторизация</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input
                type="email"
                placeholder="example@example.com"
                required
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Пароль:
              <input
                type="password"
                placeholder="••••••••"
                required
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <button type="submit">Войти</button>
        </form>
      </Modal>
    </header>
  );
};

export default Header;