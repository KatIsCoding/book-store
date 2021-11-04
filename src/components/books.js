import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import AddNewBookComponent from './booksComponents/addBook';
import RemoveBook from './booksComponents/removeBook';
import { loadInitialBooks } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './books.css';

let loaded = false;
function BookComponent(props) {
  const {
    title, id, author, category,
  } = props;
  return (
    <ListGroup.Item className="bookEntry">
      <div className="bookInformation">
        <h6 className="bookCategory">{category}</h6>
        <h3 className="bookTitle">{title}</h3>
        <h6 className="bookAuthor">{author}</h6>
        <div className="buttons-handler">
          <RemoveBook id={id} />
        </div>

      </div>
      <div className="progressInformation">
        <div className="bookProgress">
          <CircularProgressbar value="69" />
        </div>
        <h5>69%</h5>
      </div>
      <div className="separator">
        <hr style={{ height: 100, width: 2 }} />
      </div>
      <div className="progressDetails">
        <h6>CURRENT CHAPTER</h6>
        <h6>CHAPTER 1</h6>
        <button type="button" className="btn btn-primary">UPDATE PROGRESS</button>
      </div>

    </ListGroup.Item>
  );
}

BookComponent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loaded) {
      dispatch(loadInitialBooks());
      loaded = true;
    }
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ListGroup className="booksWrapper">
        {books.map((book) => (
          <BookComponent
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
            category={book.category}
          />
        ))}
      </ListGroup>
      <AddNewBookComponent />
    </div>
  );
}

export default Books;
