import React from 'react';
import { Countdown } from '../countdown/countdown';
export const banner = () => {
	return (
		<div id="home">
			<section className='hero-banner'>
				<div className='container text-center'>
					
					<div className="around">
						<p>08 - 11 April 2021, Hammamet City</p>
					<h1>CSTC 2021</h1>
					<Countdown></Countdown>
					<a className='button button-header' href='#'>
						About CSTC
					</a>
					</div>
					
				</div>
			</section>
		</div>
	);
};
