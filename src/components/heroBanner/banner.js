import React, { useEffect } from 'react';
import { Countdown } from '../countdown/countdown';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Banner = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div id='home'>
			<section className='hero-banner'>
				<div class='overlay'></div>

				<div className='container text-center'>
					<div className='around'>
						<div data-aos='fade-down-right'>
							{' '}
							<p>08 - 11 April 2021, Hammamet City </p>
							<h1>CSTC 2021</h1>
						</div>
						<div data-aos='fade-up-left'>
							<Countdown></Countdown>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
