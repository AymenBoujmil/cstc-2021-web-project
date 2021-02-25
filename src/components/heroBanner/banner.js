import React from 'react';
import {countdown as Countdown} from '../countdown/countdown';
export const banner = () => {
	return (
		<div>
			<section class='hero-banner'>
				<div class='container text-center'>
					<span class='hero-banner-icon'>
						<i class='flaticon-sing'></i>
					</span>
					<p>08 - 11 April 2021, Hammamet City</p>
					<h1>CSTC 2021</h1>
					<Countdown></Countdown>
					<a class='button button-header' href='#'>
						About CSTC
					</a>
				</div>
			</section>
		</div>
	);
};
