const hello = require('./hello');

const resolvers = {
  Query: {
    characters: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getCharacters(),
    character: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getCharacter(args.id),
    books: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getBooks(),
    book: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getBook(args.id),
  },
};

module.exports = resolvers;
