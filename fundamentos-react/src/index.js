import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <div id='app'>
       <Primeiro></Primeiro> 
       <ComParametro
       titulo='Situação do Aluno'
       aluno='Pedro Silva' 
       nota={9.3} /> 
    </div>
  )