<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Development

1. Clone
2. Install dependencies

```bash
yarn
```

3. Nest cli installed

```bash
npm i -g @nestjs/cli
```

4. Serve DB

```bash
docker-compose up -d
```

5. Create .env file Example: [.env.template](.env.template)

6. Start dev server

```bash
  yarn start:dev
```

7. Can populate DB with

```
  http://localhost:PORT/api/v2/seed
```

## Built with

- [![NestJs][NestJs]][NestJs-url]
- [![Mongodb][Mongodb]][Mongodb-url]
- [![Prisma][Prisma]][Prisma-url]
- [![Docker][Docker]][Docker-url]

[NestJs]: https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white
[NestJs-url]: https://docs.nestjs.com/
[Mongodb]: https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[Mongodb-url]: https://www.mongodb.com
[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
