import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { signUp } from '../../services/users.js'
import Layout from '../../components/Layout/Layout'
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

  const handleChange = (ev) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value,
    })
  }

  const onSignUp = async (ev) => {
    ev.preventDefault()
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
    const toggleForm = form.isError ? 'ERROR' : ''
    if (form.isError) {
      return (
        <Button variant='contained' color='warning' type='submit' className={toggleForm}>
          {form.errorMsg}
        </Button>
      )
    } else {
      return (
      	<Button variant='outlined' type='submit'>
      		Sign Up
      	</Button>
      )
    }
  }

  const {username, email, password, passwordConfirmation} = form


	return (
		<Layout user={ props.user ? (props.user.username ? props.user.username : props.user) : ''}>
	    <div className='sign-up-form-container'>
		    <Box>
		      <h3>Sign Up</h3>
		      <form className='sign-up-form' onSubmit={onSignUp}>
	            <TextField
	            style={{ margin: '10px 0px 0px 0px' }}
		          required
		          label='username'
		          type='text'
		          name='username'
		          value={username}
		          placeholder='Enter username'
		          onChange={handleChange}
		        />
	            <TextField
	            style ={{margin: '10px 0px 0px 0px'}}
		          required
		          label='email'
		          type='text'
		          name='email'
		          value={email}
		          placeholder='Enter email'
		          onChange={handleChange}
		        />
	            <TextField
	            style ={{margin: '10px 0px 0px 0px'}}
		          required
		          label='password'
		          name='password'
		          value={password}
		          type='password'
		          placeholder='Password'
		          onChange={handleChange}
		        />
	            <TextField
	            style ={{margin: '10px 0px 10px 0px'}}
		          required
		          label='confirm password'
		          name='passwordConfirmation'
		          value={passwordConfirmation}
		          type='password'
		          placeholder='Confirm Password'
		          onChange={handleChange}
		        />
		        {renderError()}
		      </form>
		      <p>Already Have An Account? 
		      	<Link className='sign-in' to='/sign-in'>
		      		Sign In
		      	</Link>
		      </p>
		    </Box>
	   	</div>
	  </Layout>
	)
}

export default SignUp