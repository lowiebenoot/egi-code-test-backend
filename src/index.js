const { ApolloServer, gql } = require('apollo-server-lambda');

const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const AnApiOfIceAndFire = require('./dataSources/AnApiOfIceAndFire');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  dataSources: () => ({
    anApiOfIceAndFire: new AnApiOfIceAndFire(),
  }),
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
  },
});
