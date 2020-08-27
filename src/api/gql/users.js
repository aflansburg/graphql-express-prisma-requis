const {
  graphql,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

const { getAllUsers, getUserById } = require('../../dataAccess/users');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLInt },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
  },
});

module.exports.usersSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLInt },
        },
        resolve: (root, args, context, info) => {
          const { id } = args;
          return getUserById(id);
        },
      },
    },
  }),
});
