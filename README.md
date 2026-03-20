# Pokédex (NestJS Playground)

This repository is my **NestJS self-learning playground**.

It is a small Pokédex app used to practice core NestJS concepts:

- modules
- controllers
- services and dependency injection
- DTOs and TypeScript interfaces
- server-side rendering with Handlebars
- unit and e2e testing with Jest

## What this project does

- Serves a web page at `/` that renders a list of Pokémon.
- Exposes a small REST API to create and list Pokémon.
- Stores data in memory (no database yet).

## Routes

### Web

- `GET /` → renders the Pokédex page (`views/pages/index.hbs`)

### API

- `GET /api/pokemon` → returns all Pokémon
- `POST /api/pokemon` → creates a new Pokémon

Example `POST` body:

```json
{
  "name": "Bulbasaur",
  "type": "Grass",
  "hp": 45,
  "attack": 49,
  "defense": 49,
  "speed": 45
}
```

## Project structure

- `src/main.ts`: app bootstrap, view engine setup, static files
- `src/app.module.ts`: root module
- `src/pokemon/*`: API controller, service, module, DTO and types
- `src/pokedex/*`: web controller/module for SSR page
- `views/layouts/*`: shared Handlebars layouts
- `views/partials/*`: reusable Handlebars partials
- `views/pages/*`: page templates rendered by controllers
- `static/styles.css`: styles for the page
- `test/`: e2e tests

```text
.
├── src
│   ├── app.module.ts
│   ├── main.ts
│   ├── pokedex
│   │   ├── pokedex.controller.ts
│   │   └── pokedex.module.ts
│   └── pokemon
│       ├── dto
│       │   └── create-pokemon.dto.ts
│       ├── interfaces
│       │   └── pokemon.interface.ts
│       ├── pokemon.controller.ts
│       ├── pokemon.module.ts
│       ├── pokemon.service.spec.ts
│       └── pokemon.service.ts
├── views
│   ├── layouts
│   │   └── main.hbs
│   ├── pages
│   │   └── index.hbs
│   └── partials
│       ├── page-header.hbs
│       └── pokemon-list.hbs
├── static
│   └── styles.css
├── test
│   └── app.e2e-spec.ts
├── README.md
└── package.json
```

## Useful commands

### Setup

```bash
npm install
```

### Development

```bash
# Run app
npm run start

# Run with watch mode (recommended for learning)
npm run start:dev

# Run with debugger + watch
npm run start:debug
```

### Build and production

```bash
# Compile TypeScript
npm run build

# Run compiled app from dist/
npm run start:prod
```

### Quality and formatting

```bash
# Lint and auto-fix
npm run lint

# Format src/ and test/
npm run format
```

### Tests

```bash
# Unit tests
npm run test

# Unit tests in watch mode
npm run test:watch

# Coverage
npm run test:cov

# e2e tests
npm run test:e2e
```

## Quick start

1. Install dependencies: `npm install`
2. Start dev server: `npm run start:dev`
3. Open: `http://localhost:3000`
4. Use the API with Postman/curl to add Pokémon and refresh the page.

## Learning notes

Current version uses in-memory storage. A next learning step could be adding:

- validation (`class-validator`)
- persistence (SQLite/PostgreSQL + Prisma/TypeORM)
- update/delete endpoints
- Swagger docs

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file.
