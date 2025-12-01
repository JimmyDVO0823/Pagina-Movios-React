import React from "react"
import ReactDom from "react-dom/client"

const root = ReactDom.createRoot(document.getElementById("root")); //Creamos el elemento raiz
//Los componentes en react son funciones que retornan etiquetas
function Hello() {
  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  );
}

//Renderizamos la raiz
root.render(
  <div>
    <Hello />
  </div>
);
