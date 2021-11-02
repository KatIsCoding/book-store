import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function AddNewBookComponent() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const bookTitle = e.target.elements.bookTitle.value;
    const bookAuthor = e.target.elements.bookAuthor.value;
    const id = Date.now();
    e.target.elements.bookTitle.value = '';
    e.target.elements.bookAuthor.value = '';
    dispatch(addBook({ title: bookTitle, author: bookAuthor, id }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e);
    }}
    >
      <input id="bookTitle" type="text" placeholder="Book Title" />
      <input id="bookAuthor" type="text" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
}
