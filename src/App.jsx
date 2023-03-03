import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Nav from './components/nav';
import './sass/index.scss';

function App() {
  return (
    <div className='App'>
      <Nav />

      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/destination' index element={<h1> destination </h1>} />
        <Route path='/crew' index element={<h1> Crew </h1>} />
        <Route path='/technology' index element={<h1> technology </h1>} />
      </Routes>
    </div>
  );
}

export default App;
