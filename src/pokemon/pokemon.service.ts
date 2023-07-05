import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pokemon, Prisma } from '@prisma/client';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      const newPokemon = await this.prisma.pokemon.create({
        data: {
          ...createPokemonDto,
        },
      });

      return newPokemon;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          throw new BadRequestException(
            `There is a unique constraint violation, a new pokemons cannot be created with name '${createPokemonDto.name}'`,
          );
        }
      }
      throw error;
    }
  }

  async findAll() {
    const pokemons: Pokemon[] = await this.prisma.pokemon.findMany();
    return pokemons;
  }

  async findOne(id: string) {
    const pokemon = await this.prisma.pokemon.findUnique({
      where: {
        id,
      },
    });

    if (!pokemon) throw new NotFoundException('Pokemon not found');

    return pokemon;
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const newPokemon = await this.prisma.pokemon.update({
        where: {
          id,
        },
        data: {
          ...updatePokemonDto,
        },
      });

      return newPokemon;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          throw new BadRequestException(
            `There is a unique constraint violation, a new pokemons cannot be created with name '${updatePokemonDto.name}'`,
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException(`Not found pokemon with id: '${id}'`);
        }
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const newPokemon = await this.prisma.pokemon.delete({
        where: {
          id,
        },
      });

      return newPokemon;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner

        if (error.code === 'P2025') {
          throw new NotFoundException(`Not found pokemon with id: '${id}'`);
        }
      }
      throw error;
    }
  }
}
