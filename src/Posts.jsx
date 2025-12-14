import { RiMusicFill } from "react-icons/ri";

export const Post = ({ text }) => {
  return (
    <button onClick={fetchData}>
      <RiMusicFill />
      {text}
    </button>
  );
};

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  //alert("Fetching data")
}
