import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Nav from './components/nav';
import './sass/index.scss';
import Destination from './routes/Destination';

function App() {
  function CreateBG({ name }) {
    name = name || 'home';

    return (
      <div className='overlay-background'>
        <picture>
          <source
            srcSet={require(`./assets/${name}/background-${name}-mobile.jpg`)}
            media='(max-width: 411px)'
          />
          <source
            srcSet={require(`./assets/${name}/background-${name}-tablet.jpg`)}
            media='(max-width: 772px)'
          />
          <img
            src={require(`./assets/${name}/background-${name}-desktop.jpg`)}
            alt='home background'
          />
        </picture>
      </div>
    );
  }
  return (
    <div className='app'>
      <Nav />

      <Routes>
        <Route
          path='/'
          index
          element={
            <>
              <CreateBG />
              <Home />
            </>
          }
        />
        <Route
          path='/destination'
          element={
            <>
              <CreateBG name='destination' />
              <Destination />
            </>
          }
        >
          <Route path=':planet' element={<></>} />
        </Route>
        <Route
          path='/crew'
          element={
            <>
              <CreateBG name='crew' />
              <h1> crew </h1>
            </>
          }
        />
        <Route
          path='/technology'
          element={
            <>
              <CreateBG name='technology' />
              <h1> technology </h1>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
