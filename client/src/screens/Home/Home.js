import Layout from '../../components/Layout/Layout';
import BookCards from '../../components/BookCards/BookCards';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import './Home.css';

const Home = (props) => {
	
	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
			<div className="home-page">
				<h1>Welcome to the Library</h1>
				<BookCards />
      </div>
      <Link to='/sign-up'>
      <Button className='join-button' variant='outlined'>Join us!</Button>
    </Link>
		</Layout>
	)
}

export default Home