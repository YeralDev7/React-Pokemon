import { useEffect, useState } from "react";
import "./styles.css";

const Home = ({ name }) => {
  const [sprites, setSprites] = useState([]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log("aqui",data)
        Object.entries(data.sprites).map((sprite) => {
          setSprites([...sprites, sprite[1]]);
        });
      });
  }, []);

  return (
    <div>
      <h1 className="title">El nombre del Pokemon es: {name}</h1>
      <ol>
        {sprites.map((data, index) => {
          let img = data["generation-i"]["red-blue"].back_default;
          console.log(data["generation-i"]["red-blue"].back_default);
          return (
            <li key={index}>
              <img href="https://www.google.com" src={img} />;
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Home;
