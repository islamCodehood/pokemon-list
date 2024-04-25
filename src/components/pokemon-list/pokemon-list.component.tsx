import { useGetPokemonListQuery } from '../../services/pokemon';
import './pokemon-list.styles.css';

interface PokemonListProps {
  selectPokemon: Function;
}

const PokemonList: React.FC<PokemonListProps> = ({ selectPokemon }) => {
  const { data, error, isLoading } = useGetPokemonListQuery('');
  console.log(data);
  const handleClick = (id: string) => {
    console.log(id);
    selectPokemon(id);
  }
  return (
    <div className='list'>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>There was an error</h1>
      ) : (
        data && (
          <ul className='max-w-md divide-y divide-gray-200'>
            {data?.results.map((pokemon: any, index: number) => (
              <li className='p-6 hover:cursor-pointer hover:bg-gray-100' key={index} onClick={() => handleClick(pokemon?.url.split('/')[6])}>
                <div className='flex items-center space-x-4'>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-12 h-12'
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${
                        pokemon?.url.split('/')[6]
                      }.gif`}
                      alt={pokemon?.name}
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-lg font-medium text-gray-600 truncate'>
                      {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
export default PokemonList;
