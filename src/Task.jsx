import "./TaskStyles.css";
import myImage from "./foto.jpeg";
export function Card({valid}) {
  return (
    <div className="photoCard" id={valid ? 'bg-green' : 'bg-red'}>
      <img src={myImage} alt="Descripción de la foto" />
      <label>Foto</label>
    </div>
  );
}
