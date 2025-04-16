import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <h1>fundamentos reacts </h1>

    <Card titulo="#4 - Desafio Aleatorio">
    <Fragmento />
      </Card>

    <Card titulo="#3 - Fragmento">
    <Aleatorio/>
      </Card>

    <Card titulo="#2 - Com Parametro">
    <Fragmento />
    <ComParametro 
    titulo="Situação do Aluno" 
    aluno="Pedro Silva" 
    nota={8.7} 
    />
    </Card>

    <Card titulo="#1 - Primeiro Componente">
    <Primeiro></Primeiro>
    </Card>

  </div>
);
