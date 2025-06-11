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
import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { ImageSlider } from './components/ImageSlider';
import { InfoSection } from './components/InfoSection';
import { CallToAction } from './components/CallToAction';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import Header from './components/Header'; 

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
        setActiveIndex(0);
      });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ImageSlider />
      <InfoSection />
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
      <CallToAction />
    </Layout>
  );
};

export default App;