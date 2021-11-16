import Layout from '../../components/Layout/Layout';

const Home = (props) => {
	return (
		<Layout user={props.user}>
			<div className="home-page">
				<h1>Test Home Page</h1>
			</div>
		</Layout>
	)
}

export default Home