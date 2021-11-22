import Fuse from 'fuse.js'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { verifyUser } from './services/users'
import { getBooks } from './services/books'
import Home from './screens/Home/Home'
import Books from './screens/Books/Books'
import BookCreate from './screens/BookCreate/BookCreate'
import BookEdit from './screens/BookEdit/BookEdit'
import BookDetail from './screens/BookDetail/BookDetail'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SearchResults from './screens/SearchResults/SearchResults'
import './App.css'

function App() {

  const [user, setUser] = useState(null)
  const [books, setBooks] = useState([])
  const [query, setQuery] = useState(''); 

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  useEffect(() => {
      const fetchBooks = async () => {
        const allBooks = await getBooks()
        setBooks(allBooks)
      }
      fetchBooks()
  }, [])

  const fuse = new Fuse(books, {
      keys: [
        'title',
        'author',
        'genre'
      ],
      includeScore: true,
  })

  const foundBooks = [];
  const results = fuse.search(query)
    results.map((result) => {
      if(result.score <= 0.1){
        foundBooks.push(result.item) 
      }
      return foundBooks;
    })

    const searchBooks = (ev) => {
      setQuery(ev)
    }

  return (
    <div className="App">
      <Routes>
        <Route exact path='//*' element={<Home user={user} foundBooks={foundBooks} query={query} searchBooks={searchBooks}/>} />
        <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
        <Route path='/sign-in' element={<SignIn setUser={setUser} />} /> 
        <Route path='/sign-out' element={<SignOut setUser={setUser} />} />   
        <Route exact path='/books' element={<Books user={user}/>} /> 
        <Route path='/add-book' element={user ? <BookCreate user={user} /> : <Navigate to='/sign-up' />} /> 
        <Route exact path='/books/:id/edit' element={user ? <BookEdit user={user} /> : <Navigate to='/sign-up' />} />
        <Route exact path='/books/:id' element={<BookDetail user={user} />} />
        <Route path='/search-results' element={<SearchResults user={user} foundBooks={foundBooks} query={query} searchBooks={searchBooks}/>} />
      </Routes>
    </div>
  )
}

export default App;
