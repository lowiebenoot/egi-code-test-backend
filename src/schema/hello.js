const { gql } = require('apollo-server-lambda');

const hello = gql`
  type Query {
    hello: String
  }
`;

module.exports = hello;
