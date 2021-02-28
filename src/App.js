import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { navbar as Navbar } from './components/navbar/navbar';
import { banner as Banner } from './components/heroBanner/banner';
import { footer as Footer } from './components/footer/footer';
import { Themes } from './components/ThemesSection/Themes';
import { Schedule } from './components/schedule/Schedule';
import { Sponsor } from './components/sponsor/sponsor';




function App() {
	return (
		<div>
			<Navbar></Navbar>
			<Banner></Banner>
			<Themes></Themes>
			<Schedule></Schedule>
			<Sponsor></Sponsor>
			<Footer></Footer>
		</div>
	);
}

export default App;
