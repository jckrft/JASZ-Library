import { useState } from 'react'
import { signUp } from '../../services/users.js'
import { useNavigate, Link} from 'react-router-dom'
import Layout from '../../components/Layout/Layout';
import './SignUp.css'




const SignUp = (props) => {
  const navigate = useNavigate()
  
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid'
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }

  const {username, email, password, passwordConfirmation} = form


	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ""}>
	    <div className='sign-up-form-container'>
	      <h3>Sign Up</h3>
	      <form className="sign-up-form" onSubmit={onSignUp}>
	        <label>Username</label>
	        <input
	          required
	          type='text'
	          name='username'
	          value={username}
	          placeholder='Enter username'
	          onChange={handleChange}
	        />

	        <label>Email Address</label>
	        <input
	          required
	          type='text'
	          name='email'
	          value={email}
	          placeholder='Enter email'
	          onChange={handleChange}
	        />

	        <label>Password</label>
	        <input
	          required
	          name='password'
	          value={password}
	          type='password'
	          placeholder='Password'
	          onChange={handleChange}
	        />

	        <label>Password Confirmation</label>
	        <input
	          required
	          name='passwordConfirmation'
	          value={passwordConfirmation}
	          type='password'
	          placeholder='Confirm Password'
	          onChange={handleChange}
	        />
	        {renderError()}
	      </form>
	      <p>Already Have An Account? <Link to="/sign-in">Sign In</Link></p>
	    </div>
	    </Layout>
	)
}

export default SignUp