// import './screens/Books/Books.css';
import Book from '../../components/Book/Book';
import Layout from '../../components/Layout/Layout';

import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';

const Books = () => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getBooks()
      setBooks(allBooks)
    }
    fetchBooks()
  }, [])

  if (!books) return <h1>loading...</h1>

  return (
    <Layout>
      <div className='books'>
        {books.map((book, index) => {
          return (
            <Book
              _id={book._id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              description={book.description}
              imgURL={book.imgURL}
            />
          )
        })}
			
      </div>
      </Layout>
	)
}

export default Books