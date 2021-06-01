import React from 'react'
import { useHistory } from 'react-router-dom'
import db from '../../Firebase'
import './SideBarOption.css'

function SidebarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory()
    const selectChannel = () => {
        if(id){
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')

        if(channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }
	return (
		<div className='SidebarOption' onClick={addChannelOption ? addChannel : selectChannel }>
			{Icon && <Icon className='SidebarOption-Icon' />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<h3 className='SidebarOption-Channel'>
					{' '}
					<span className='sidebarOption-hash'>#</span>
					{title}
				</h3>
			)}
		</div>
	)
}

export default SidebarOption
