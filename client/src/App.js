import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { verifyUser } from './services/users';

import Home from './screens/Home/Home';
import Books from './screens/Books/Books';
import BookCreate from './screens/BookCreate/BookCreate';
import BookEdit from './screens/BookEdit/BookEdit';
import BookDetail from './screens/BookDetail/BookDetail';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import SignOut from './screens/SignOut/SignOut'
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} /> 
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />   
        <Route exact path="/books" element={<Books user={user}/>} /> 
        <Route path="/add-book" element={user ? <BookCreate user={user} /> : <Navigate to="/sign-up" />} /> 
        <Route exact path="/books/:id/edit" element={user ? <BookEdit user={user} /> : <Navigate to='/' />} />
        <Route exact path="/books/:id" element={<BookDetail user={user} />} />   
      </Routes>
    </div>
  );
}

export default App;
