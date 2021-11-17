import Layout from '../../components/Layout/Layout';
import BookCards from '../../components/BookCards/BookCards';
import './Home.css';

const Home = (props) => {
	
	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
			<div className="home-page">
				<h1>Welcome to the Library</h1>
				<BookCards />
			</div>
		</Layout>
	)
}

export default Home