import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

export default function RemoveBook({ bookID }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(bookID));
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleRemove}>
      Remove
    </button>
  );
}

RemoveBook.propTypes = {
  bookID: PropTypes.number.isRequired,
};
