import { PokemonService } from './pokemon.service';
import type { Pokemon } from './interfaces/pokemon.interface';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    service = new PokemonService();
  });

  it('getAllPokemon() returns an empty list initially', () => {
    expect(service.getAllPokemon()).toEqual([]);
  });

  it('createPokemon() stores and returns the pokemon', () => {
    const pokemon: Pokemon = {
      name: 'Bulbasaur',
      type: 'Grass',
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
    };

    expect(service.createPokemon(pokemon)).toEqual(pokemon);
    expect(service.getAllPokemon()).toEqual([pokemon]);
  });
});
