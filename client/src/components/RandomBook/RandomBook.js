import { useEffect, useState } from "react"
import BookCard from '../BookCard/BookCard.js'
import { getBooks } from '../../services/books';

const RandomBook = () => {
	const [randomBooks, setRandomBooks] = useState([]);

	const getRandom = (books) => {
		let randomNum = Math.floor(Math.random() * books.length - 1)
		let randomBook = books[randomNum]
		return randomBook
	}

	useEffect(() => {
		const fetchBooks = async () => {
			const books = await getBooks()
			setRandomBooks([getRandom(books), getRandom(books)])	
		}
		fetchBooks();		
	}, [])

	const Cards = randomBooks.map((book, index) => (
    <div key={index}>
    <BookCard
      key={index}
      _id={book._id}
      imgURL={book.imgURL}
      title={book.title}
     
    />
     <p>{book.description}</p>
     </div>
  ))

	return (
		<div className='random-books'>
    		{randomBooks ? <div className='cards'>{Cards}</div> : ""}
    	</div>
	)
}

export default RandomBook