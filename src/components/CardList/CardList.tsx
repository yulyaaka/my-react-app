import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const CardList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then((res) => res.json())
      .then((data: Comment[]) => {
        setComments(data);
        setActiveIndex(0);
      })
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

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
