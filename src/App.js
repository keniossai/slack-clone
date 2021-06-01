import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './components/Chat/Chat'

function App() {
	const [user, setUser] = useState('null')
	return (
		// BEM Naming convention
		<div className='App'>
			<Router>
				{!user ? (
					<h1>Login Page</h1>
				) : (
					<>
						<Header />
						<div className='app-body'>
							<Sidebar />
							<Switch>
								<Route path='/room/:roomId'>
									<Chat />
								</Route>
								<Route path='/'>
									<h2>Welcome </h2>
								</Route>
							</Switch>
						</div>
					</>
				)}
			</Router>
		</div>
	)
}

export default App
