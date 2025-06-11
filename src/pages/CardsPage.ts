// src/pages/CardsPage.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CardList from '../components/CardList/CardList';

export const CardsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  return (
    <div>
      <h2>Карточки ({limit})</h2>
      <CardList limit={limit} />
    </div>
  );
};