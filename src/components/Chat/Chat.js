import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import db from '../../Firebase'
import Message from '../message/Message'

function Chat() {
	const { roomId } = useParams()
	const [roomDetails, setRoomDetails] = useState(null)
	const [roomMessages, setRoomMessages] = useState([])

	useEffect(() => {
		if (roomId) {
			db.collection('rooms')
				.doc(roomId)
				.onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
		}

		db.collection('rooms')
			.doc(roomId)
			.collection('messages')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) =>
				setRoomMessages(snapshot.docs.map((doc) => doc.data()))
			)
	}, [roomId])

	console.log(roomMessages)
	return (
		<div className='chat'>
			<div className='chat-header'>
				<div className='chatHeader-left'>
					<h4 className='chat-channelName'>
						<strong># {roomDetails?.name}</strong>
						<StarBorderOutlined />
					</h4>
				</div>
				<div className='chatHeader-right'>
					<p>
						<InfoOutlined /> Details
					</p>
				</div>
			</div>
			<div className='chatMessages'>
				{roomMessages.map(({message, timestamp, userimage, user}) => (
					<Message
						messages={message}
						timestamp={timestamp}
						user={user}
						userimage={userimage}
					/>
				))}
			</div>
		</div>
	)
}

export default Chat
