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
				<h1>Welcome to the Library</h1>
				<BookCards />
      
      <Link to='/sign-up'>
      <Button className='join-button' variant='contained'>Join us!</Button>
        </Link>
      
        <RandomBook />
        
			</div>
		</Layout>
	)
}

export default Home