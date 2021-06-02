import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../Firebase'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import './Login.css'

function Login() {
    const [state, dispatch ] = useStateValue()

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
			})
			.catch((error) => {
				alert(error.message)
			})
	}
	return (
		<div className='Login'>
			<div className='loginContainer'>
				<img
					src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png'
					alt=''
				/>
				<h1>Sign in to Hasetech HQ</h1>
				<p>hasetech.slack.com</p>
				<Button onClick={signIn}>Sign In with Google</Button>
			</div>
		</div>
	)
}

export default Login
