import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { createBook } from '../../services/books';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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
    <Layout user={props.user ? (props.user.username ? props.user.username : props.user) : ""}>
      <h1>Add a Book</h1>
      <div className='book-create-container'>
      <Box>
      <form className="book-create" onSubmit={handleSubmit}>
      
          <TextField
            style ={{width: '100%', margin: '10px 0px 0px 0px'}}
            required
            id="standard-required"
            variant="standard"
            multiline
            label="Title"
            type="text"
				    className="input-title"
				    placeholder="Title"
				    name="title"
				    value={book.title}
				    onChange={handleChange}
          />
          
            <TextField
            style ={{width: '100%', margin: '10px 0px 0px 0px'}}
            required
            id="standard-required"
            variant="standard"
            multiline
            label="Author"
            type="text"
				    className="input-author"
				    placeholder="Author"
				    name="author"
				    value={book.author}
				    onChange={handleChange}
          />

            <TextField
            style ={{width: '100%', margin: '10px 0px 0px 0px'}}
            required
            id="standard-required"
            variant="standard"
            multiline
            label="Genre"
            type="text"
				    className="input-genre"
				    placeholder="Genre"
				    name="genre"
				    value={book.genre}
				    onChange={handleChange}
				  />

            <TextField
            style ={{width: '100%', margin: '10px 0px 0px 0px'}}
            required
            id="standard-required"
            variant="standard"
            label="Image URL"
            type="text"
				    className="input-imgURL"
				    placeholder="Image URL"
				    name="imgURL"
            value={book.imgURL}
            onChange={handleChange}
				  />

            <TextField
            style ={{width: '100%', margin: '10px 0px 0px 0px'}}
            required
            id="standard-required"
            variant="standard"
            multiline
            rows={4}
            label="Description"
				    className="textarea-description"
				    placeholder="Description"
				    name="description"
				    value={book.description}
				    onChange={handleChange}
				  />

            <Button variant="outlined" type="submit" className="submit-button" style={{ width: '100px', margin: '30px 0px 0px 260px'}}>Submit</Button>
			</form>
      </Box>
      </div>
		</Layout>
	)
}

export default BookCreate