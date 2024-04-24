import { Link } from "react-router-dom";
import {useParams} from "react-router-dom";
const PokemonPage: React.FC = () => {
  const {pokemonId} = useParams(); 
  return (
    <div>
      <h1>Pokemon</h1>
      <p>Here is a Pokemon!</p>
    </div>
  );
};

export default PokemonPage;
