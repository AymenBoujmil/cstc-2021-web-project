import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { banner as Banner } from '../components/heroBanner/banner';

import { AboutUs } from '../components/AboutUs/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { Sponsor } from '../components/sponsor/sponsor';
<<<<<<< HEAD
import { Team } from '../components/Team/Team';
import { Contact } from '../components/ContactUs/Contact';
=======
import Team from '../components/Team/team2';
>>>>>>> 4808930859e7946d593f1b7720aa1ce907e1169e

export default function Home() {
	return (
		<div>
			<Banner></Banner>
			<AboutUs></AboutUs>
			<Team></Team>
			<Sponsor></Sponsor>
			<Contact></Contact>
			
		</div>
	);
}
