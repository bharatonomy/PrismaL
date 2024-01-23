# PrismaL

Learning about prisma.

When we write raw SQL it might be vulnerable to SQL injection.

So ORMs are used for:

- Connection
- Security
- Data Modelling
- Migrations

ORM: Object Relational Mapper are used to define the schema for the data being stored. It also provides a more declarative approach.

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

- A simple ORM could be node-postgres. Basically raw SQL is used but provides with functions such as db.query() and safer way to execute them.
- Similarly, postgres.js uses sql\`QUERY ${params}\` for query execution
- Knex depends upon the pg library and is same as prisma. It works on promises. Limited in typesafety.
- Kysley is same as Knex. but provides typesafety as we can define interfaces.
- Still they aren't a complete ORMs as they do not completely provide a object oriented way to work with queries.
- Sequelize is a good alternative but type safety is limited.
- TypeORM use Decorators for definition.
- DrizzleORM is a typesafe approach.
