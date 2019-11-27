const { RESTDataSource } = require('apollo-datasource-rest');

class AnApiOfIceAndFire extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://anapioficeandfire.com/api';
  }

  async getBooks() {
    const books = await this.get('/books');
    return books.map(this.transformBook);
  }

  async getBook(id) {
    const book = await this.get(`/books/${id}`);
    return this.transformBook(book);
  }

  async getCharacters() {
    const characters = await this.get('/characters');
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
