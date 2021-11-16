import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signIn } from '../../services/users';
import './SignIn.css';

const SignIn = (props) => {
	const history = useNavigate();

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
			history.push('/')
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
				<button type="submit" className={toggleSignIn}>{signInForm.errorMsg}</button>
			)
		}
		else {
			return <button type="submit">Sign In</button>
		}
	}

	return (
		<form className="sign-in-form" onSubmit={onSignIn}>
			<label htmlFor="email">Email</label>
			<input
				className="input-email"
				placeholder="Email Address"
				value={email}
				required
				onChange={handleChange}
			/>
			<label htmlFor="password">Password</label>
			<input
				className="input-password"
				placeholder="Password"
				value={password}
				required
				onChange={handleChange}
			/>
			{renderError()}
		</form>
	)
}

export default SignIn