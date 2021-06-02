import React, { useState, useEffect } from 'react'
import {
	Add,
	Apps,
	BookmarkBorder,
	Create,
	Drafts,
	ExpandLess,
	ExpandMore,
	FiberManualRecord,
	FileCopy,
	Inbox,
	InsertComment,
	PeopleAlt,
} from '@material-ui/icons'
import './Sidebar.css'
import SidebarOption from '../Sidebar-option/SidebarOption'
import db from '../../Firebase'
import { useStateValue } from '../../StateProvider'

function Sidebar() {
	const [channels, setChannels] = useState([])
	const [{ user }] = useStateValue()

	useEffect(() => {
		// Run this code once when the sidebar components loads
		db.collection('rooms').onSnapshot((snapshot) =>
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			)
		)
	}, [])
	return (
		<div className='sidebar'>
			<div className='sidebar-header'>
				<div className='sidebarInfo'>
					<h2>Dev Workspace</h2>
					<h3>
						<FiberManualRecord />
						{user?.displayName}
					</h3>
				</div>
				<Create />
			</div>
			<SidebarOption Icon={InsertComment} title='Threads' />
			<SidebarOption Icon={Inbox} title='Mentions & Reactions' />
			<SidebarOption Icon={Drafts} title='Saved items' />
			<SidebarOption Icon={BookmarkBorder} title='Channel Browser' />
			<SidebarOption Icon={PeopleAlt} title='People & user groups' />
			<SidebarOption Icon={Apps} title='Apps' />
			<SidebarOption Icon={FileCopy} title='File Browser' />
			<SidebarOption Icon={ExpandLess} title='Show less' />
			<hr />
			<SidebarOption Icon={ExpandMore} title='Channels' />
			<hr />
			<SidebarOption Icon={Add} addChannelOption title='Add Channel' />
			{/* Connect to Database list all channels */}
			{channels.map((channel) => (
				<SidebarOption title={channel.name} id={channel.id} />
			))}
		</div>
	)
}

export default Sidebar

// Completed
