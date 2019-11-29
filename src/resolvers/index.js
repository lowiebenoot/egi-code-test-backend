const resolvers = {
  Query: {
    characters: (root, args, { dataSources }) =>
      dataSources.anApiOfIceAndFire.getCharacters(args.pageNumber, args.pageSize),
    character: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getCharacter(args.id),
    books: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getBooks(args.pageNumber, args.pageSize),
    book: (root, args, { dataSources }) => dataSources.anApiOfIceAndFire.getBook(args.id),
  },
};

module.exports = resolvers;
