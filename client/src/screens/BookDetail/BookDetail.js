import "./BookDetail.css";
import { useEffect, useState } from "react";
import { getBook, deleteBook } from "../../services/books.js";
import  Layout  from "../../components/Layout/Layout.js";
import { Link, useParams, Navigate } from "react-router-dom";

const BookDetail = (props) => {
  const [book, setBook] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBook(id);
      setBook(book);
      setLoaded(true);
    };
    fetchBook();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  const redirectToSignUp = () => {
    if(!props.user){
      return <Navigate to={`/sign-up`} />
    }
  }

  return (
    <Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
      <div className="book-detail">
        <img className="book-detail-img" src={book.imgURL} alt={book.title} />
        <div className="detail">
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
          <div className="genre">{book.genre}</div>
          <div className="description">{book.description}</div>
          <div className="button-container">
            <Link to={`/books/${book._id}/edit`} className="edit-button">
              Edit
            </Link>
            <button
              className="delete-button"
              onClick={ props.user ? () => deleteBook(book._id) : () => redirectToSignUp }
            >Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
