import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../../redux/books/books';

export default function RemoveBook({ bookID }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteBook(bookID));
  };

  return (
    <button type="button" className="btn btn-link" onClick={handleRemove}>
      Remove
    </button>
  );
}

RemoveBook.propTypes = {
  bookID: PropTypes.number.isRequired,
};
