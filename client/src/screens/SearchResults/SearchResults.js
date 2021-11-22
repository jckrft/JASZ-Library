import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import Book from '../../components/Book/Book';
import './SearchResults.css';

const SearchResults = ({foundBooks, user}) => {
 
  return (
    <Layout user={ user ? (user ? user.username : user) : ''}>
      <h1 className='search-header'>Search Results</h1>
      <div className='search-results'>
        {foundBooks.length > 0 ? foundBooks.map((book) => (
          <div className='found-books' key={book._id}>
              <Book 
                _id={book._id}
                title={book.title}
                author={book.author}
                genre={book.genre}
                description={book.description}
                imgURL={book.imgURL}
              />
              <br />
          </div>  
        )) : 
          <div className='no-results-container'>
            <h2 className='no-results'>No Results Found</h2>
            <div className='book-animation'>
              <span className='page turn'></span>
              <span className='page turn'></span>
              <span className='page turn'></span>
              <span className='page turn'></span>
              <span className='page turn'></span>
              <span className='page turn'></span>
              <span className='cover'></span>
              <span className='page'></span>
              <span className='cover turn'></span>
            </div>
            <Link className='return-home' to='/'>
                  <Button className='home-button' variant='contained'>
                    Return Home
                  </Button>
            </Link>
          </div>
        }
      </div>
    </Layout>
  )
}

export default SearchResults