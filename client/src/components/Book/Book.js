import { Link } from 'react-router-dom';

const Book = (props) => {
  return (
    <>
      <Link className='book' to={`/books/${props._id}`}>
        <img className='book-image'
          src={props.imgURL}
          alt={props.title}
        />
        <div className='book-title'>{props.title}</div>
        <div className='book-description'>{props.description}</div>
        <div className='book-author'>{props.author}</div>
        <div className='book-genre'>{props.genre}</div>
      </Link>
    </>
  )
}

export default Book