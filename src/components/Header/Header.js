import React from 'react'
// Material Icons
import { Avatar } from '@material-ui/core'
import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
// CSS
import './Header.css'

function Header() {
	return (
		<div className='header'>
			<div className='header-left'>
				{/* Avatar logged in users */}
				<Avatar
					className='header-avatar'
					alt='Kenneth Ossai'
					src=''
				/>
                <AccessTime />
				{/* Time Icon */}
			</div>
			<div className='header-search'>
				<Search />
				<input type="text" placeholder='Search slack...' />
			</div>
			<div className='header-right'>
                <HelpOutline />
            </div>
		</div>
	)
}

export default Header
