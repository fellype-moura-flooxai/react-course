import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div id="app">
    <h1>fundamentos reacts 2</h1>
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={8.7} />
    <Primeiro></Primeiro>
  </div>
);
