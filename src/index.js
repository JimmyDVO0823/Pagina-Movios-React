import React from "react";
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

let buttonText = "Fetch Data";

const people = [
  {
    id: 1,
    name: "D'Franco",
    url: "https://robohash.org/person1",
  },
  {
    id: 2,
    name: "Heidy",
    url: "https://robohash.org/person2",
  },
  {
    id: 3,
    name: "Max",
    url: "https://robohash.org/person3",
  },
];

function renderUser() {
  return people.map((user, i) => {
    return (
      <div>
        <h1>{user.id + ") " + user.name}</h1>
        <img src={user.url} />
      </div>
    );
  });
}

//Renderizamos la raiz
root.render(
  <>
    <Card valid={true} />
    <Button text={"Texto"} />
    <input
      id="hola"
      onChange={function (e) {
        console.log(e.target.value);
      }}
    />
    <form onSubmit={prevent}>
      <h1>Formulario</h1>
      <button>Button</button>
    </form>
    <Post text={buttonText} />
    {renderUser()}
  </>
);
