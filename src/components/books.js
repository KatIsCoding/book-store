import { useSelector } from 'react-redux';
import AddNewBookComponent from './booksComponents/addBook';
import RemoveBook from './booksComponents/removeBook';

function Books() {
  const books = useSelector((state) => state.books);

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
