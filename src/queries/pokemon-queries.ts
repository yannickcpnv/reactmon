import PokeApiService from '../services/poke-api.service';
import {UseQueryOptions} from '@tanstack/react-query';
import {IPokemonBulkResponse} from '../types/poke-api';

type PokeApiQueryOptions<T> = Omit<UseQueryOptions<T, unknown, T, string[]>, 'initialData'>;

const pokeApiService = new PokeApiService();

export const pokemonListQuery: PokeApiQueryOptions<IPokemonBulkResponse> = {
  queryKey: ['pokemon', 'list'],
  queryFn: () => pokeApiService.getAllPokemon().then((response) => response.data)
};