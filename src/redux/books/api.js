export default class BooksAPI {
  constructor() {
    this.API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TjwZyMOGQJO3ZFQ61Exw';
  }

  getAll() {
    return fetch(`${this.API_URL}/books`).then((res) => res.json());
  }

  async postNew(book) {
    return fetch(`${this.API_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
  }

  async deleteBook(bookId) {
    return fetch(`${this.API_URL}/books/${bookId}`, {
      method: 'DELETE',
    });
  }
}
