import React, { useEffect, useState } from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import db from '../../Firebase'

function Chat() {
	const { roomId } = useParams()
	const [roomDetails, setRoomDetails] = useState(null)

	useEffect(() => {
		db.collection('rooms')
			.doc(roomId)
			.onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
	}, [roomId])

	return (
		<div className='chat'>
			<div className='chat-header'>
				<div className='chatHeader-left'>
					<h4 className='chat-channelName'>
						<strong># greneral</strong>
						<StarBorderOutlined />
					</h4>
				</div>
				<div className='chatHeader-right'>
					<p>
						<InfoOutlined /> Details
					</p>
				</div>
			</div>
		</div>
	)
}

export default Chat
