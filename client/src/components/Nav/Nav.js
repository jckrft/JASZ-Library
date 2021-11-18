import './Nav.css'
import logo from '../../assets/logo-image.png'
import { Link } from 'react-router-dom'

const authenticatedOptions = (
    <>
        <Link className="link" to="/books">Browse Books</Link>
        <Link className="link" to="/add-book">Add Book</Link>
        <Link className="link" to="/sign-out">Sign Out</Link>
    </>
)
const unauthenticatedOptions = (
    <>
        <Link className="link" to="/books">Browse Books</Link>
        <Link className="link" to="/sign-up">Sign Up</Link>
        <Link className="link" to="/sign-in">Sign In</Link>
    </>
)

const Nav = (props) => {

        return (
            <nav>
                <div className="nav">
                    <Link className="logo" to="/"><img src={logo} alt="Logo" /></Link>
                    <div className="links">
                        {props.user !== "" ? authenticatedOptions : unauthenticatedOptions}
                        {props.user && <div className="link welcome">{props.user.username ? props.user.username : `Welcome, ${props.user}`}</div>}
                    </div>
                </div>
            </nav>
        )
}
export default Nav
