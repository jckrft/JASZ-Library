import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField'
import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getBook, updateBook, deleteBook } from '../../services/books'
import Layout from '../../components/Layout/Layout'
import './BookEdit.css'

const BookEdit = (props) => {
  
  const [isDeleted, setIsDeleted] = useState(false)
  const [isUser, setIsUser] = useState(false)

  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    imgURL: '',
    description: '',
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams()

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      setBook(book);
    };
    fetchBook();
  }, [id]);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const updated = await updateBook(id, book);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Navigate to={`/books/${id}`} />;
  }

  if (isDeleted) {
    return <Navigate to='/books' />;
  }

  if (isUser) {
    return <Navigate to={`/sign-up`} />;
  }

  return (
    <Layout user={props.user}>
      <div className='book-edit'>
        <img className='edit-book-image' src={book.imgURL} alt={book.title} />
        <form className='edit-form' onSubmit={handleSubmit}>
          <TextField
            className='edit-input-image-link'
            placeholder='Image Link'
            value={book.imgURL}
            name='imgURL'
            label='Image URL'
            required
            multiline
            variant='standard'
            onChange={handleChange}
          />
          <br />
          <TextField
            className='input-title'
            placeholder='Title'
            value={book.title}
            name='title'
            label='Title'
            required
            variant='standard'
            autoFocus
            onChange={handleChange}
          />
          <br />
          <TextField
            className='input-author'
            placeholder='Author'
            value={book.author}
            name='author'
            label='Author'
            required
            variant='standard'
            onChange={handleChange}
          />
          <br />
          <TextField
            className='input-genre'
            placeholder='Genre'
            value={book.genre}
            name='genre'
            label='Genre'
            required
            variant='standard'
            onChange={handleChange}
          />
          <br />
          <TextField
            className='textarea-description'
            rows={8}
            placeholder='Description'
            value={book.description}
            name='description'
            label='Description'
            required
            multiline
            variant='standard'
            onChange={handleChange}
          />
          <div className='edit-button-container'>
            <button type='submit' className='save-button'>
              Save
            </button>
            <button
              className='delete-button'
              onClick={props.user ? () => {deleteBook(book._id) && setIsDeleted(true);}: () => setIsUser(true)}
            >
              <DeleteIcon />
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default BookEdit
