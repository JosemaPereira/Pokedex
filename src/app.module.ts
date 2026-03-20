import { Module } from '@nestjs/common';
import { PokemonModule } from './backend/pokemon/pokemon.module';
import { PokedexModule } from './frontened/pokedex/pokedex.module';

@Module({
  imports: [PokemonModule, PokedexModule],
})
export class AppModule {}
