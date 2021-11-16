import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
  return (
    <>
      <Link className='book' to={`/books/${props._id}`}>
        <img className='book-image'
          src={props.imgURL}
          alt={props.title}
        />
      </Link>
    </>
  )
}

export default Book