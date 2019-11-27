const { ApolloServer, gql } = require('apollo-server-lambda');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

exports.graphqlHandler = server.createHandler();
