export function Hello() {
  return (
    <div>
      <h1>Hello, world</h1>
    </div>
  );
}

export function Married({ marry }) {
  //Se utilizan {} para que sea el boolean y no un objeto props
  return <h1>{marry ? "Estoy casado😶" : "No estoy casado👹"}</h1>;
}

export function MenuBar() {
  return <nav>
    <label>opcion</label>
    <label>opcion</label>
    <label>opcion</label>
    <label>opcion</label>
    <label>opcion</label>
  </nav>;
}
