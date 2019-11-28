const { gql } = require('apollo-server-lambda');

const hello = require('./hello');
const character = require('./character');
const book = require('./book');

const queries = gql`
  type Query {
    characters(pageNumber: Int): [Character]
    character(id: ID!): Character
    books: [Book]
    book(id: ID!): Book
  }
`;

module.exports = [character, book, queries];
