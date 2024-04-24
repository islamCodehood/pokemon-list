import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/not-found/not-found.page.tsx';
import PokemonPage from './pages/pokemon/pokemon.page.tsx';
import PokemonListPage from './pages/pokemon-list/pokemon-list.page.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: 'pokemon/',
				element: <PokemonListPage />,
			},
			{
				path: 'pokemon/:pokemonId',
				element: <PokemonPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
