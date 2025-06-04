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
import React from 'react';
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

export default App;