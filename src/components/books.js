import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AddNewBookComponent from './booksComponents/addBook';
import RemoveBook from './booksComponents/removeBook';
import { loadInitialBooks } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadInitialBooks());
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <AddNewBookComponent />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            <RemoveBook bookID={book.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
