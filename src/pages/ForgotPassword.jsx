import { useState } from 'react'
import { ReactComponent as ArrowRightComponent } from '../assets/svg/keyboardArrowRightIcon.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
const ForgotPassword = () => {
	const [email, setEmail] = useState()
	const onSubmit = async (e) => {
		e.preventDefault()
		try {
			const auth = getAuth()
			await sendPasswordResetEmail(auth, email)
			toast.success('Email sent ')
		} catch (error) {
			toast.error('could not send reset email')
		}
	}
	const onChange = (e) => {
		setEmail(e.target.value)
	}
	return (
		<div className='pageContainer'>
			<header>
				<p className='pageHeader'>Forgot Password</p>
			</header>
			<main>
				<form onSubmit={onSubmit}>
					<input
						type='email'
						name='email'
						id='email'
						onChange={onChange}
						value={email}
						className='emailInput'
					/>
					<Link className='forgotPasswordLink' to='/sign-in'>
						Sign in
					</Link>
					<div className='signInBar'>
						<div className='signInText'>Send Reset Link</div>
						<button className='signInButton'>
							<ArrowRightComponent fill='#FFFFFF' width='34px' height='34px' />
						</button>
					</div>
				</form>
			</main>
		</div>
	)
}

export default ForgotPassword
