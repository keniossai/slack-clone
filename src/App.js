import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Chat from './components/Chat/Chat'
import Login from './components/auth/Login'
import { useStateValue } from './StateProvider'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	const [{ user }, dispatch] = useStateValue()

	return (
		// BEM Naming convention
		<div className='App'>
			<Router>
				{!user ? (
					<Login />
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
