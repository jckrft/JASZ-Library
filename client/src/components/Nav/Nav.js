import './Nav.css'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <Link className="link" to="/add-book">Add Book</Link>
        <Link className="link" to="/sign-out">Sign Out</Link>
    </>
)
const unauthenticatedOptions = (
    <>
        <Link className="link" to="/sign-up">Sign Up</Link>
        <Link className="link" to="/sign-in">Sign In</Link>
    </>
)
const alwaysOptions = (
    <>
        <Link className="link" to="/books">Books</Link>
    </>
)
const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <Link className="logo" to="/">BooksApp</Link>
                    <div className="links">
                        {user && <div className="link welcome">Welcome to the library, {user.username}</div>}
                        {alwaysOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav
