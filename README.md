`npm install` to get started
Will need local PG db and check w/ aflansburg for .env file for DB connection string env var for Prisma

After ^ need to run:

```
npx prisma init
npx prisma introspect
npx prisma generate
npm run dev
```

Test gql api w/ postman or other.
Graphiql is not hooked up correctly I don't think
