import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './Layout.css'

const Layout = (props) => (
	<div>
		<Nav user={ props ? (props.user.username ? props.user.username : props.user) : 'Guest'}/>
		<div className='layout-children'>
			{props.children}
		</div>
		<Footer />
	</div>
)

export default Layout