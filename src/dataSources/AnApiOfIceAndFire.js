const { RESTDataSource } = require('apollo-datasource-rest');

const DEFAULT_PAGE_SIZE = 20;

class AnApiOfIceAndFire extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://anapioficeandfire.com/api';
  }

  async getBooks(pageNumber = 1, pageSize = DEFAULT_PAGE_SIZE) {
    const books = await this.get(`/books?pageSize=${pageSize}&&page=${pageNumber}`);
    return books.map(this.transformBook);
  }

  async getBook(id) {
    const book = await this.get(`/books/${id}`);
    return this.transformBook(book);
  }

  async getCharacters(pageNumber = 1, pageSize = DEFAULT_PAGE_SIZE) {
    const characters = await this.get(`/characters?pageSize=${pageSize}&&page=${pageNumber}`);
    return characters.map(this.transformCharacter);
  }

  async getCharacter(id) {
    const character = await this.get(`/characters/${id}`);
    return this.transformCharacter(character);
  }

  transformCharacter(character) {
    return {
      ...character,
      id: character.url.split('/').pop(),
    };
  }

  transformBook(book) {
    return {
      ...book,
      id: book.url.split('/').pop(),
    };
  }
}

module.exports = AnApiOfIceAndFire;
