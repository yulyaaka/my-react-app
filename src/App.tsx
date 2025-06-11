/*import { useState } from 'react'
import Message from './Message'
import './App.css' 

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="container">
      <Message text="Привет, мир!" />
    </div>
  );
}

export default App;
*/

/*
  export const App = observer ((): React.ReactElement => {
    const { isLoading: isAppLoading } = StoreMobx;

 /* const [theme, setTheme] = useState<string>('')*/

// src/App.tsx
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { ImageSlider } from './components/ImageSlider';
import { InfoSection } from './components/InfoSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CallToAction } from './components/CallToAction';

const App = () => {
  return (
    <Layout>
      <HeroSection />
      <ImageSlider />
      <InfoSection />
      <FeaturesSection />
      <CallToAction />
    </Layout>
  );
};


// src/App.tsx
import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then((res) => res.json())
      .then((data: Comment[]) => {
        setComments(data);
        setActiveIndex(0); // активируем первую карточку по умолчанию
      });
  }, []);

  return (
    <div className="features-container">
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


export default App;