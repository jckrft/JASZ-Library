import Layout from '../../components/Layout/Layout';
import BookCard from '../../components/BookCard/BookCard';

const Home = (props) => {
	
	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
			<div className="home-page">
				<h1>Welcome to the Library</h1>
				<BookCard />
			</div>
		</Layout>
	)
}

export default Home