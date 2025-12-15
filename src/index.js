import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { Button } from "./Button";
import { Card } from "./Task";
import { Post } from "./Posts";

const root = ReactDom.createRoot(document.getElementById("root")); //Creamos el elemento raiz
//Los componentes en react son funciones que retornan etiquetas
const prevent = (e) => {
  e.preventDefault();
  alert("hola");
  console.log("no se elimina");
};

function Message() {
  const [message, setMessage] = useState(0);
  useEffect(() => {
    console.log("El mensaje ha cambiado");
  }, [message]);
  return (
    <div>
      <input onChange={e => setMessage(e.target.value)}></input>
      <br></br>
      <button onClick={e => alert(message)}>ALERT</button>
    </div>
  );
}

//Renderizamos la raiz
root.render(
  <>
    <Message />
  </>
);
