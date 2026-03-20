import { Controller, Get, Render } from '@nestjs/common';
import { PokemonService } from '../../backend/pokemon/pokemon.service';
import type { Pokemon } from '../../backend/pokemon/interfaces/pokemon.interface';

@Controller()
export class PokedexController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @Render('index')
  home(): { pokemon: Pokemon[] } {
    return { pokemon: this.pokemonService.getAllPokemon() };
  }
}
