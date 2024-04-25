import './pokemon.styles.css';
import { useGetPokemonByIdQuery } from '../../services/pokemon';

const Pokemon: React.FC<{ pokemonId: string }> = ({ pokemonId }) => {
	const { data, error, isLoading } = useGetPokemonByIdQuery(pokemonId);
	console.log(data);
	return (
		<div className='pokemon'>
			{isLoading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>There was an error</h1>
			) : (
				data?.name ? (
					<div className='w-full max-w-sm bg-white'>
						<div className='flex flex-col items-center pb-10'>
							<img
								className='w-64 h-64 mb-3 rounded-full shadow-xl -mt-24 p-1'
								src={data?.sprites?.['other']?.['dream_world']?.['front_default']}
								alt={data?.name}
							/>
							<h5 className='mb-1 text-3xl font-medium text-gray-700'>
								{`${data?.name?.charAt(0)?.toUpperCase()} ${data?.name?.slice(1)}`}
							</h5>

							<div className='flex mt-4 md:mt-6 gap-10'>
								<div>
									<h6 className='text-lg  text-gray-600'>Height</h6>
									<span className='mb-1 font-medium text-lg text-gray-500'>
										{data?.height}
									</span>
								</div>
								<div>
									<h6 className='text-lg  text-gray-600'>Weight</h6>
									<span className='mb-1 font-medium text-lg text-gray-500'>
										{data?.weight}
									</span>
								</div>
								<div>
									<h6 className='text-lg  text-gray-600'>Types</h6>
									<ul className='flex flex-wrap items-center justify-center text-gray-500'>
                    {
                      data?.types?.map((type: any, index: number) => (
                        <li key={index} className='me-2 mb-1 font-medium text-lg text-gray-500'>
                          {type?.type?.name}
                        </li>
                      ))
                    }
										
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : (
					<h1>Select a pokemon</h1>
				)
			)}
		</div>
	);
};

export default Pokemon;
