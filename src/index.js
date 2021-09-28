import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import App from './App';
//import Arrays from './components/Arrays'
//import ChamadaApi from './Modelos/ChamadaApi'
//import ChamadaHeroku from './Modelos/ChamadaHeroku'
import {Teste} from './Modelos/Teste'

ReactDOM.render(
  <React.StrictMode>
    <Teste/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
