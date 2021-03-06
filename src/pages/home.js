import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../components/navbar/navbar';
import { banner as Banner } from '../components/heroBanner/banner';
import { footer as Footer } from '../components/footer/footer';
import { Themes } from '../components/ThemesSection/Themes';
import { Schedule } from '../components/schedule/Schedule';
import { Speakers } from '../components/speakers/speakers';
import { AboutUs } from '../components/AboutUs/AboutUs';
import { ContactUs } from '../components/ContactUs/ContactUs';
import { Sponsor } from '../components/sponsor/sponsor';

function App() {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<Themes></Themes>
			<Schedule></Schedule>
			<Speakers></Speakers>
			<Sponsor></Sponsor>
		</div>
	);
}

export default App;
