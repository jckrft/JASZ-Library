import './Nav.css'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <Link className="link" to="/add-book">Add Book</Link>
        <Link className="link" to="/sign-out">Sign Out</Link>
        <Link className="link" to="/books">Books</Link>
    </>
)
const unauthenticatedOptions = (
    <>
        <Link className="link" to="/sign-up">Sign Up</Link>
        <Link className="link" to="/sign-in">Sign In</Link>
        <Link className="link" to="/books">Books</Link>
    </>
)

const Nav = (props) => {
        console.log(props.user)

        return (
            <nav>
                <div className="nav">
                    <Link className="logo" to="/">JASZ Library</Link>
                    <div className="links">
                        {props.user && <div className="link welcome">Welcome to the library, {props.user.username ? props.user.username : props.user}</div>}
                        {props.user !== "Guest" ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav
