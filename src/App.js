import React, { useState } from 'react';
import './App.css';
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name: 'about', description: ''},
    { name: 'portfolio', description: '' },
    { name: 'contact', description: '' },
    { name: 'resume', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <About></About>
    </div>
  );
}

export default App;
