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
        <Route exact path='/'>
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/books">
          <Books user={user} />
        </Route>
        <Route path="/add-book">
          {user ? <BookCreate user={user} /> : <Navigate to="/sign-up" />}
          
        </Route>
        <Route exact path="/books/:id/edit">
          {user ? <BookEdit user={user} /> : <Navigate to='/' />}
        </Route>
        <Route exact path="/books/:id">
          <BookDetail user={user} />
        </Route>
      </Routes>


    </div>
  );
}

export default App;
