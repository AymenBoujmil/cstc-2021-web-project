import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navbar as Navbar } from './components/navbar/navbar';
import { banner as Banner } from './components/heroBanner/banner';
import { footer as Footer } from './components/footer/footer';
import { Themes } from './components/ThemesSection/Themes';
import { Schedule } from './components/schedule/Schedule';
import { Speakers } from './components/speakers/speakers';

function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Banner></Banner>
			<Themes></Themes>
			<Schedule></Schedule>
			<Speakers></Speakers>
			<Footer></Footer>
		</div>
	);
}

export default App;
