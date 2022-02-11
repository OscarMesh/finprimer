import React from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar';
import About from './containers/about/About';
import Header from './containers/header/Header';
import Services from './containers/services/Services';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Services />
    </div>
  );
};

export default App;

