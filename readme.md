# Comandos para executar
- npm init 
- npm i express 
- npm i prisma
- npm i @prisma/client
- npm i @prisma/adapter-mariadb
- npm i dotenv
- npx prisma init
- npx prisma generate
- //alterar schema - modificar arquivo schema.prisma, 
criar model

- conteúdo do arquivo: 

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

// Get a free hosted Postgres database in seconds: `npx create-db`

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
}

model Pet {
  id    Int     @id @default(autoincrement())
  name  String
  owner String
}

```



// criar .env e inserir
DATABASE_URL="mysql://root:@localhost:3306/integradoBDprisma"
- npx prisma migrate dev

