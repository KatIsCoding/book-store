import PropTypes from 'prop-types';

export default function Books(props) {
  const { books, onBookDelete } = props;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            <button onClick={onBookDelete} type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  onBookDelete: PropTypes.func.isRequired,
};
