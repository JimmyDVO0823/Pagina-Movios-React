import React from "react";
import ReactDom from "react-dom/client";
import { Married, Hello, MenuBar } from "./Married";

const root = ReactDom.createRoot(document.getElementById("root")); //Creamos el elemento raiz
//Los componentes en react son funciones que retornan etiquetas

//Renderizamos la raiz
root.render(
  <>
    <MenuBar/>
    <Married marry={true} />
    <Married marry={false} />
    <Hello />
  </>
);
