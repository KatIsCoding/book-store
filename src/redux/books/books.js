import BooksAPI from './api';

const BooksObj = new BooksAPI();
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const deleteBook = (id) => (dispatch) => {
  BooksObj.deleteBook(id).then((response) => {
    if (response.ok) {
      dispatch(removeBook(id));
    }
  });
};

export const postNewBook = (book) => (dispatch) => {
  const requestBook = {
    item_id: book.id,
    title: `${book.title}|${book.author}`,
    category: book.category,
  };
  BooksObj.postNew(requestBook).then((response) => {
    if (response.ok) {
      dispatch(addBook(book));
    }
  });
};

export const loadInitialBooks = () => (dispatch) => {
  BooksObj.getAll().then((books) => {
    console.log(books);
    Object.keys(books).forEach((bookID) => {
      const book = {};
      const [bookTitle, bookAuthor] = books[bookID][0].title.split('|');
      book.id = bookID;
      book.title = bookTitle;
      book.author = bookAuthor;
      book.category = books[bookID][0].category;
      dispatch(addBook(book));
    });
  });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
