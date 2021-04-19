import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { banner as Banner } from '../components/heroBanner/banner';


import { AboutUs } from '../components/AboutUs/AboutUs';
import { ContactUs } from './ContactUs/ContactUs';
import { Sponsor } from '../components/sponsor/sponsor';
import { Team } from '../components/Team/Team';
import { Contact } from '../components/ContactUs/Contact';

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
