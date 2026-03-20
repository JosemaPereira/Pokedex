import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokedexModule } from './pokedex/pokedex.module';

@Module({
  imports: [PokemonModule, PokedexModule],
})
export class AppModule {}
