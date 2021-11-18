import Layout from '../../components/Layout/Layout';
import BookCards from '../../components/BookCards/BookCards';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import RandomBook from '../../components/RandomBook/RandomBook';
import TextField from '@mui/material/TextField';


import './Home.css';

const Home = (props) => {
	const {user, query, searchBooks} = props	

	return (
		<Layout user={ user ? (user.username ? user.username : user) : ""}>
			<div className="home-page">
				<h1 className="home-header">Welcome to the Library</h1>
				<h2 className="recent-favorites">Recent Additions</h2>
				<BookCards />
				<div className="search-items">
					<TextField id="outlined-search" 
						label="Search Books" 
						type="search" 
						placeholder="Search Books" 
						multiline
						value={query} 
						onChange={(ev) => searchBooks(ev.target.value)}
					/>
					<Link className="search-link" to="/search-results">
						<Button className='search-button' variant='contained'>Search</Button>
					</Link>
				</div>
      			<div className="hidden-container">
	      			<h2 className={user ? "join-header-visible" : "join-header-hidden"}>Welcome Back!</h2>
	      			<h2 className={user ? "join-header-hidden" : "join-header-visible"}>Interested in Contributing?</h2>
			    	<Link className={user ? "sign-up-redirect-hidden" : "sign-up-redirect-visible"} to='/sign-up'>
			     		<Button className='join-button' variant='contained'>Join us!</Button>
			    	</Link>
		      	</div>
		        <RandomBook />
			</div>
		</Layout>
	)
}

export default Home