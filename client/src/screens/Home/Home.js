import Layout from '../../components/Layout/Layout';
import BookCards from '../../components/BookCards/BookCards';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import RandomBook from '../../components/RandomBook/RandomBook';
import './Home.css';

const Home = (props) => {

	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
			<div className="home-page">
				<h1 className="home-header">Welcome to the Library</h1>
				<h2 className="recent-favorites">Recent Additions</h2>
				<BookCards />
      			<div className="hidden-container">
	      			<h2 className={props.user ? "join-header-visible" : "join-header-hidden"}>Welcome Back!</h2>
	      			<h2 className={props.user ? "join-header-hidden" : "join-header-visible"}>Interested in Contributing?</h2>
			    	<Link className={props.user ? "sign-up-redirect-hidden" : "sign-up-redirect-visible"} to='/sign-up'>
			     		<Button className='join-button' variant='contained'>Join us!</Button>
			    	</Link>
		      	</div>
		        <RandomBook />
			</div>
		</Layout>
	)
}

export default Home