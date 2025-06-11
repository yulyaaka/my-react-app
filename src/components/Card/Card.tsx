// src/components/Card/Card.tsx
import React, { useState } from 'react';
import styles from './Card.module.css';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CardProps {
  comment: Comment;
  isActive?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ comment, isActive = false, onClick }) => {
  return (
    <div
      className={`${styles.featureCard} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <h3>{comment.name}</h3>
      <p className={styles.email}>{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Card;