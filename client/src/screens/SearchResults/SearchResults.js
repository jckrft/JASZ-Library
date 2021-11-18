import Layout from '../../components/Layout/Layout';
import Book from '../../components/Book/Book';

const SearchResults = ({foundBooks, user}) => {
 
  return (
    <Layout user={ user ? (user ? user.username : user) : ""}>
      <h1 className="search-header">Search Results</h1>
      {foundBooks ? foundBooks.map((book) => (
        <div className="search-results" key={book._id}>
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
      )) : ""}
    </Layout>
  )
}

export default SearchResults