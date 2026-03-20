import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import type { Pokemon } from './interfaces/pokemon.interface';
import { PokemonService } from './pokemon.service';

@Controller('api/pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get()
  getAllPokemon(): Pokemon[] {
    return this.pokemonService.getAllPokemon();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPokemon(@Body() createPokemonDto: CreatePokemonDto): Pokemon {
    return this.pokemonService.createPokemon(createPokemonDto);
  }
}
