import { useDispatch } from 'react-redux';
import { postNewBook } from '../../redux/books/books';
import './addBook.css';

export default function AddNewBookComponent() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const bookTitle = e.target.elements.bookTitle.value;
    const bookAuthor = e.target.elements.bookAuthor.value;
    const category = e.target.elements.category.value;
    const id = Date.now();
    e.target.elements.bookTitle.value = '';
    e.target.elements.bookAuthor.value = '';
    e.target.elements.category.value = '';
    dispatch(postNewBook({
      title: bookTitle, author: bookAuthor, id, category,
    }));
  };

  return (
    <div>
      <hr styles={{ height: 1, width: '100%' }} />
      <h2>Add New Book</h2>
      <form
        className="form-inline mainForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <div className="form-row form-group col-md-6">
          <input id="bookTitle" className="form-control" type="text" placeholder="Book Title" />
          <input id="bookAuthor" className="form-control" type="text" placeholder="Author" />
          <input id="category" className="form-control" type="text" placeholder="Category" />
          <button type="submit" className="btn btn-primary submitForm">Add Book</button>
        </div>
      </form>
    </div>
  );
}
