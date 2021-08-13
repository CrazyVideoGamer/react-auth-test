import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SignUp from './pages/SignUp'

function App() {
  return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/signup">
					<SignUp />
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
