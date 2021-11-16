
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
    <Layout user={props.user}>
      <div className="book-detail">
        <img className="book-detail-img" src={book.imgURL} alt={book.title} />
        <div className="detail">
          <div className="title">{book.title}</div>
          <div className="author">{book.author}</div>
          <div className="genre">{book.genre}</div>
          <div className="description">{book.description}</div>
          <div className="button-container">
            <Link to={`books/${book._id}/edit`} className="edit-button">
              Edit
            </Link>
            <button
              className="delete-button"
              onClick={() => deleteBook(book._id)}
            ></button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
