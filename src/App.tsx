import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import PokemonList from './components/pokemon-list/pokemon-list.component';
import Pokemon from './components/pokemon/pokemon.component';

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState<string>('');
	return (
		<>
			<div id='app'>
				<header >
					<h1>Pokemon</h1>
				</header>
				<main>
					<PokemonList selectPokemon={(id: string) => setSelectedPokemonId(id)} />
					<Pokemon pokemonId={selectedPokemonId} />
				</main>
			</div>
		</>
	);
}

export default App;
