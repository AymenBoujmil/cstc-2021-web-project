import React from 'react';
import { Countdown } from '../countdown/countdown';
export const banner = () => {
	return (
		<div id='home'>
			<section className='hero-banner'>
				<div class='overlay'></div>

				<div className='container text-center'>
					<div className='around'>
						<p>08 - 11 April 2021, Hammamet City</p>
						<h1>CSTC 2021</h1>
						<Countdown></Countdown>
					</div>
				</div>
			</section>
		</div>
	);
};
