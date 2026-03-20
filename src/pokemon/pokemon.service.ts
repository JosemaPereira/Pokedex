import { Injectable } from '@nestjs/common';
import { Pokemon } from './interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
  private readonly pokemon: Pokemon[] = [];
  createPokemon(pokemon: Pokemon): Pokemon {
    this.pokemon.push(pokemon);
    return pokemon;
  }

  getAllPokemon(): Pokemon[] {
    return this.pokemon;
  }
}
