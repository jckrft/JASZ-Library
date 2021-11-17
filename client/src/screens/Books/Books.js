import Book from '../../components/Book/Book';
import Layout from '../../components/Layout/Layout';
import Sort from '../../components/Sort/Sort';
import { AZ, ZA } from '../../utils/sort';
import './Books.css';

import { useEffect, useState } from 'react';
import { getBooks } from '../../services/books';

const Books = (props) => {
  const [books, setBooks] = useState(null)
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')
 
  useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await getBooks()
      setBooks(allBooks)
      setSearchResult(allBooks)
    }
    fetchBooks()
  }, [])

  const handleSort = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'title-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'title-descending':
        setSearchResult(ZA(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleSort(sortType)
    setApplySort(false)
  }

  if (!books) return <h1>loading...</h1>

  const handleSubmit = (ev) => ev.preventDefault()

  return (
    <Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
      <h1 className='books-header'>Books</h1>
      <Sort onSubmit={handleSubmit} handleSort={handleSort}/>
      <div className='books'>
        {searchResult.map((book, index) => {
          return (
            <Book
              key={index}
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