import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { createBook } from '../../services/books';
import './BookCreate.css';

const BookCreate = (props) => {
	const [book, setBook] = useState({
		title:'',
		author:'',
		genre:'',
		imgURL:'',
		description:'',
	})

	const [bookCreated, setBookCreated] = useState(false);

	const handleChange = (ev) => {
		const { name, value } = ev.target;
		setBook({
			...book,
			[name]: value,
		})
	}

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		const created = await createBook(book);
		setBookCreated({ created });
	}

	if(bookCreated){
		return <Navigate to="/books"/>
	}


	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
			<form className="book-create" onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
				className="input-title"
				placeholder="Title"
				name="title"
				value={book.title}
				required
				onChange={handleChange}
				/>
				<label htmlFor="author">Author</label>
				<input
				className="input-author"
				placeholder="Author"
				name="author"
				value={book.author}
				required
				onChange={handleChange}
				/>
				<label htmlFor="genre">Genre</label>
				<input
				className="input-genre"
				placeholder="Genre"
				name="genre"
				value={book.genre}
				required
				onChange={handleChange}
				/>
				<label htmlFor="imgURL">Image URL</label>
				<input
				className="input-imgURL"
				placeholder="Image URL"
				name="imgURL"
				value={book.imgURL}
				required
				onChange={handleChange}
				/>
				<label htmlFor="description">Discription</label>
				<textarea
				className="textarea-description"
				placeholder="Description"
				name="description"
				value={book.description}
				required
				onChange={handleChange}
				/>
				<button type="submit" className="submit-button">Submit</button>
			</form>
		</Layout>
	)
}

export default BookCreate