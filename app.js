/*
  Just a  note on why I'm using require (CommonJS) vs import (ES6 modules)
  Node docs state here: https://nodejs.org/docs/latest-v12.x/api/esm.html#esm_ecmascript_modules
  "Expect major changes in the implementation including interoperability support,
   specifier resolution, and default behavior." for 12.x LTS version
*/

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { usersSchema } = require('./src/api/gql/users');

const app = express();

// define a route for graphql
app.use(
  '/graphql/users',
  graphqlHTTP({
    schema: usersSchema,
    graphiql: false,
  })
);

console.log('listening on port 4000');
app.listen(4000);
