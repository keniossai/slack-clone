import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Chat from './components/Chat/Chat'

function App() {
	return (
		// BEM Naming convention
		<div className='App'>
    <Router>
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
			{/* React-router -> chat screen */}
			</div>
    </Router>
		</div>
	)
}

export default App
