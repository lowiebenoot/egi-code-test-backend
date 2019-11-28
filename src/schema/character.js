const { gql } = require('apollo-server-lambda');

module.exports = gql`
  type Character {
    id: ID!
    name: String!
    aliases: [String]
    gender: String!
    culture: String
    playedBy: [String]
  }
`;
