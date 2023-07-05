import { Injectable } from '@nestjs/common';

import { PokeResponse } from './interfaces/poke-response.interface';
import { PrismaService } from 'src/prisma/prisma.service';

import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly httpAdapter: AxiosAdapter,
  ) {}

  async seed() {
    const count = await this.prisma.pokemon.count();

    if (count > 0) return { message: 'DB already populated' };

    const data = await this.httpAdapter.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    await this.prisma.pokemon.createMany({
      data: data.results.map((pokemon, index) => ({
        name: pokemon.name,
        no: index + 1,
      })),
    });
    return { message: 'DB populated' };
  }
}
