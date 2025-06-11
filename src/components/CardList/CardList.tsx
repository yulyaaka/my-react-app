import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { fallbackComments } from '../fallbackComments';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const CardList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=3');

        if (!response.ok) {
          console.warn('API не отвечает, используем локальные данные');
          setComments(fallbackComments);
          setIsLoading(false);
          setActiveIndex(0);
          return;
        }

        const data: Comment[] = await response.json();
        setComments(data);
        setIsLoading(false);
        setActiveIndex(0);
      } catch (error) {
        console.error('Ошибка загрузки с сервера:', error);
        setComments(fallbackComments);
        setIsLoading(false);
        setActiveIndex(0);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="card-list" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {comments.map((comment, index) => (
        <Card
          key={comment.id}
          comment={comment}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default CardList;
