import React from 'react'
import './Message.css'

function Message({messages, timestamp, user, userId, userimage}) {
    return (
        <div className='message'>
            <img src={userimage} alt="" />
            <div className="messageInfo">
                <h4>{user} <span className='messageTimeStamp'>{new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                <p>{messages}</p>
            </div>
        </div>
    )
}

export default Message
