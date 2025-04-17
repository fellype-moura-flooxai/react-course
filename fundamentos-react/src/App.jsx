import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Input from "./components/formulario/Input"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";


export default () => (
  <div className="App">
    <h1>fundamentos reacts </h1>

    <div className="Cards">
      <Card titulo="#11 - Componente Controlado (Input)" color="#e45f56">
      <Input></Input>
      </Card>

      <Card titulo="#10 - Comunicação Indireta" color="#8bad39">
      <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#9 - Comunicação Direta" color="#59323c">
      <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#8 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Fernando' }} />
        {/* <UsuarioInfo usuario={{}} />
        <UsuarioInfo /> */}
      </Card>

      <Card titulo="#7 - Desafio Repetição" color="#3a9ad9">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#6 - Repetição" color="#ff4c65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#5 - Componente com Filhos" color="#00c8f8">
        <Familia sobrenome="Soares">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#4 - Desafio Aleatorio" color="#fa6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#3 - Fragmento" color="#e94c6f">
        <Fragmento />
      </Card>

      <Card titulo="#2 - Com Parametro" color="#e8b71a">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={8.7}
        />
      </Card>

      <Card titulo="#1 - Primeiro Componente" color="#588c73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
