import { Link } from 'react-router-dom'
import './BookCard.css'

const BookCard = (props) => {
    return (
        <div className='book-card'>
            <Link className='card' to={`/books/${props._id}`}>
                <img className='book-card-image' src={props.imgURL} alt={props.title} />
            </Link>
        </div>
    )
}

export default BookCard