import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signIn } from '../../services/users';
import Layout from '../../components/Layout/Layout';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SignIn.css';

const SignIn = (props) => {
	const navigate = useNavigate();

	const [signInForm, setSignInForm] = useState({
		email:'',
		password:'',
		isError: false,
		errorMsg: '',
	})

	const { email, password } = signInForm;

	const handleChange = (ev) => {
		setSignInForm({
			...signInForm,
			[ev.target.name]: ev.target.value,
		})
	}

	const onSignIn = async (ev) => {
		ev.preventDefault();
		const { setUser } = props;
		try {
			const user = await signIn(signInForm);
			setUser(user);
			navigate('/');
		} catch (error) {
			console.error(error);
			setSignInForm({
				email:'',
				password:'',
				isError: true,
				errorMsg: 'Invalid Credentials. Please try again.'
			})
		}	
	}

	const renderError = () => {
		const toggleSignIn = signInForm.isError ? 'ERROR' : ''
		if(signInForm.isError) {
			return (
				<Button variant="contained" color="warning" type="submit" className={toggleSignIn}>{signInForm.errorMsg}</Button>
			)
		}
		else {
			return <Button variant="outlined" type="submit">Sign In</Button>
		}
	}

	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
			<div className="sign-in-form-container">
			<Box>
				<h3>Sign In</h3>
					<form className="sign-in-form" onSubmit={onSignIn}>
						<TextField
							label="Email"
							className="input-email"
							placeholder="Email Address"
							value={email}
							name="email"
							required
							onChange={handleChange}
						/>
						<TextField
							label="Password"
							className="input-password"
							placeholder="Password"
							type="password"
							value={password}
							name="password"
							required
							onChange={handleChange}
						/>
						{renderError()}
					</form>
					</Box>
				</div>
		</Layout>
	)
}

export default SignIn