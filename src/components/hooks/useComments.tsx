import { useEffect, useState } from 'react';
import { fallbackComments } from '../fallbackComments';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export const useComments = (limit: number) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);

        if (!response.ok) {
          throw new Error('API не отвечает');
        }

        const data = await response.json();
        setComments(data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки:', err);
        setComments(fallbackComments);
        setError('Не удалось загрузить данные');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  return { comments, isLoading, error };
};