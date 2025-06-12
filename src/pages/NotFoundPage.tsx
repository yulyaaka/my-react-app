// src/pages/NotFoundPage.tsx
/*
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 — Страница не найдена</h1>
      <p>
        Вернуться на <Link to="/">главную</Link>.
      </p>
    </div>
  );
};
*/



// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404 — Страница не найдена</h1>
      <p>Кажется, такой страницы не существует.</p>
      <Link to="/">← Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;