import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <button className="button" onClick={() => setCurrentPage('Home')}>Home</button>
          <button className="button" onClick={() => setCurrentPage('About')}>About</button>
          <button className="button" onClick={() => setCurrentPage('Portfolio')}>Portfolio</button>
          <button className="button" onClick={() => setCurrentPage('Contact')}>Contact</button>
        </nav>
      </header>
      <main>
        {renderPage()}
