# PrismaL

Learning about prisma.

ORM: Object Relational Mapper are used to define the schema for the data being stored. It also provides a more declarative approach while

Initialize a prisma project

```
npx prisma init --datasource-provider sqlite
```

The `schema.prisma` file have
generator is used to generate the client for the prisma

datasource is used to define the source used to store the data.

model is the schema structure of the data stored in that database.

To migrate the changes to database from the schema.

```
npx prisma migrate dev --name init
```

To get a GUI look into the Database

```
npx prisma studio
```

## A look into how other ORMs work
