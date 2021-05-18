import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { sponsor } from '../../assets/css/sponsor.css';
import data from '../../_utils/sponsor/sponsor.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Sponsor = () => {
	const [sponsors, setSponsors] = useState(data.sponsors);
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<div class='main-sponsor' id='sponsors'>
			<section class='section-padding--small sponsor-bg'>
				<div class='container'>
					<div class='section-intro text-center padding-title '>
						<h2
							class='primary-text'
							style={{ paddingTop: '15%' }}
							data-aos='zoom-in-down'
						>
							Event Plan Sponsors
						</h2>
					</div>
				</div>
			</section>
			<div class='rotatingList'>
				<div class='list'>
					{sponsors.map((sponsor, index) => (
						<div class='card' style={{ height: '100px' }} key={index}>
							{' '}
							<img src={sponsor.image} alt='' />
						</div>
					))}
					{sponsors.map((sponsor, index) => (
						<div class='card' style={{ height: '100px' }} key={index}>
							{' '}
							<img src={sponsor.image} alt='' />
						</div>
					))}
					<div class='card' style={{ height: '100px' }}>
						{' '}
						<img src={sponsors[0].image} alt='' />
					</div>
					<div class='card' style={{ height: '100px' }}>
						{' '}
						<img src={sponsors[1].image} alt='' />
					</div>
				</div>
				<div class='list-bis'>
					{sponsors.map((sponsor, index) => (
						<div class='card' style={{ height: '100px' }} key={index}>
							{' '}
							<img src={sponsor.image} alt='' />
						</div>
					))}
					{sponsors.map((sponsor, index) => (
						<div class='card' style={{ height: '100px' }} key={index}>
							{' '}
							<img src={sponsor.image} alt='' />
						</div>
					))}
					{sponsors.map((sponsor, index) => (
						<div class='card' style={{ height: '100px' }} key={index}>
							{' '}
							<img src={sponsor.image} alt='' />
						</div>
					))}
					<div class='card' style={{ height: '100px' }}>
						{' '}
						<img src={sponsors[0].image} alt='' />
					</div>
					<div class='card' style={{ height: '100px' }}>
						{' '}
						<img src={sponsors[1].image} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};
