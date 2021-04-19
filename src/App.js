import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar/navbar';
import { footer as Footer } from './components/footer/footer';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import { Hotel } from './pages/Hotel/Hotel';
import { Speakers } from './components/speakers/speakers';
import speakerInfo from './components/speakers/speakerInfo';
import { Schedule } from './components/schedule/Schedule';
import AboutUs from './pages/About_US/aboutUs';

function App() {
	return (
		<div>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/aboutUs' exact component={Home} />
					<Route path='/speakers' component={Speakers} />
					<Route path='/schedule' component={Schedule} />
					<Route path='/hotel' component={Hotel} />
					<Route path='/about' component={AboutUs} />
				</Switch>
				<Footer></Footer>
			</Router>
		</div>
	);
}

export default App;
