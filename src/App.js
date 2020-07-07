import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin-top: 5rem;
  @media (min-width: 992) {
    margin-top: 3rem;
  }
`;
const Btn = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //state de frases su valor inicial es un objeto
  const [frase, guardarFrase] = useState({});
  const getApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    console.log(frase[0]);
    guardarFrase(frase[0]);
  };
  // Cargar una frase
  useEffect(() => {
    getApi();
  }, []);
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Btn onClick={getApi}>ObtenerFrase</Btn>
    </Contenedor>
  );
}

export default App;
