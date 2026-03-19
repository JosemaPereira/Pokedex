import { Module } from '@nestjs/common';
import { PokedexController } from './pokedex.controller';
import { PokemonModule } from '../pokemon/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [PokedexController],
})
export class PokedexModule {}
