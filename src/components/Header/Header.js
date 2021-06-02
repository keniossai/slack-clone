import React from 'react'
// Material Icons
import { Avatar } from '@material-ui/core'
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
// CSS
import './Header.css'
import { useStateValue } from '../../StateProvider'

function Header() {
	const [{ user }] = useStateValue()
	return (
		<div className='header'>
			<div className='header-left'>
				<Avatar
					className='header-avatar'
					alt={user?.displayName}
					src={user?.photoURL}
				/>
				<AccessTime />
			</div>
			<div className='header-search'>
				<Search />
				<input type='text' placeholder='Search slack...' />
			</div>
			<div className='header-right'>
				<HelpOutline />
			</div>
		</div>
	)
}

export default Header
