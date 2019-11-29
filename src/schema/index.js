const { gql } = require('apollo-server-lambda');

const character = require('./character');
const book = require('./book');

const queries = gql`
  type Query {
    characters(pageNumber: Int, pageSize: Int): [Character]
    character(id: ID!): Character
    books(pageNumber: Int, pageSize: Int): [Book]
    book(id: ID!): Book
  }
`;

module.exports = [character, book, queries];
