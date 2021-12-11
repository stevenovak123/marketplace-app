import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Profile = () => {
	const auth = getAuth()
	const [formData, setFormData] = useState({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
	})
	const navigate = useNavigate()
	const { email, name } = formData
	const onLogout = () => {
		auth.signOut()
		navigate('/')
	}
	return (
		<div className='profile'>
			<header className='profileHeader'>
				<p className='pageHeader'>My Profile</p>
				<button className='logOut' type='button' onClick={onLogout}>
					Logout
				</button>
			</header>
		</div>
	)
}

export default Profile
