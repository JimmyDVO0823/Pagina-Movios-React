import "./TaskStyles.css"
import myImage from "./foto.jpeg"
export function Card() {
  return <div className="photoCard">
    <img src={myImage} alt="Descripción de la foto" />
    <label>Foto</label>
  </div>;
}
