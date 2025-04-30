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

import React from 'react';
import { Layout } from './Layout';

export const App = (): React.ReactElement => {
  const [theme, setTheme] = useState<string>('')

  return (
    <Layout />
  )
}