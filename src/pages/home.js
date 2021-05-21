import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Banner } from '../components/heroBanner/banner';

import { AboutUs } from '../components/AboutUs/AboutUs';

import { Sponsor } from '../components/sponsor/sponsor';
import Team from '../components/Team/team2';
import { Contact } from '../components/ContactUs/Contact';
import Countdown from '../components/countdown/countdown';

export default function Home() {
	return (
		<div>
			<Banner></Banner>
			<Countdown></Countdown>
			<AboutUs></AboutUs>
			<Team></Team>
			<Sponsor></Sponsor>
			<Contact></Contact>
		</div>
	);
}
