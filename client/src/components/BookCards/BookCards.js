import { useEffect, useState } from "react"
import { getBooks } from '../../services/books.js'
import BookCard from '../BookCard/BookCard.js'

const BookCards = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getBooks()
      setBooks(books)
    }
  fetchBooks()
  }, [])

  const Cards = books.map((book, index) => (
    <BookCard
      key={index}
      _id={book._id}
      imgURL={book.imgURL}
      title={book.title}
    />
  ))

  return (
    <div className='book-cards'>
      <div className='cards'>{Cards}</div>
    </div>
  )
}

export default BookCards