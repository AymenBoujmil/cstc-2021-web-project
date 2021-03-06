import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar/navbar';
import { footer as Footer } from './components/footer/footer';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

function App() {
	return (
		<div>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/Contact' component={ContactUs} />
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
