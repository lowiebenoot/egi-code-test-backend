const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Book {
    id: ID!
    name: String!
    isbn: String!
    numberOfPages: Int!
  }
`;
