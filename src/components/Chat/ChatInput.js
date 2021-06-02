import React, { useState } from 'react'
import db from '../../Firebase'
import { useStateValue } from '../../StateProvider'
import './ChatInput.css'
import firebase from 'firebase'

function ChatInput({ channelName, channelId }) {
	const [input, setInput] = useState('')
	const [{ user }] = useStateValue()
	const sendMessage = (e) => {
		e.preventDefault()
		if (channelId) {
			db.collection('rooms').doc(channelId).collection('messages').add({
				message: input,
				user: user.displayName,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				userimage: user.photoURL,
			})
		}
	}

	return (
		<div className='chatInput'>
			<form>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder={`Message # ${channelName}`}
				/>
				<button type='submit' onClick={sendMessage}>
					SEND
				</button>
			</form>
		</div>
	)
}

export default ChatInput
