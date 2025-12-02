import React from "react";
import ReactDom from "react-dom/client";
import { Button } from "./Button";
import {Card} from "./Task"

const root = ReactDom.createRoot(document.getElementById("root")); //Creamos el elemento raiz
//Los componentes en react son funciones que retornan etiquetas

//Renderizamos la raiz
root.render(
  <>
    <Card/>
    <Button text={"Texto"}/>
  </>
);
