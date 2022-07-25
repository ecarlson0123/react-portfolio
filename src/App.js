import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

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
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <MainPage
          currentCategory={currentCategory}
        ></MainPage>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
