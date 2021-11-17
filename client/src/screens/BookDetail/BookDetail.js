import "./BookDetail.css";
import { useEffect, useState } from "react";
import { getBook } from "../../services/books.js";
import  Layout  from "../../components/Layout/Layout.js";
import { Link, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
// Netlify comment

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
              <EditIcon/>
            </Link>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
