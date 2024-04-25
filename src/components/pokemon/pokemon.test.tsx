import { useGetPokemonByIdQuery } from "../../services/pokemon";
import {renderHook} from '@testing-library/react'

it('renders hook', () => {
  renderHook(() => useGetPokemonByIdQuery('1'));
});