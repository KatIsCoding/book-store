import BooksAPI from './api';

const BooksObj = new BooksAPI();
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initState = [];

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
    title: book.title,
    category: 'None',
  };
  BooksObj.postNew(requestBook).then((response) => {
    if (response.ok) {
      dispatch(addBook(book));
    }
  });
};

const reducer = (state = initState, action) => {
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
