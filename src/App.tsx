import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Quadratoblue from './components/quadratoblue';
import Quadratogiallo from './components/quadratogiallo';

function Paginaequadrati() {
  return (
    <div className="App">
          <div className='red'>Rosso-dalla-Rabbia</div>
          <Quadratoblue/>
          <Quadratogiallo/>
    </div>
  );
}

export default Paginaequadrati;
