import React, { useState } from 'react';
import data from '../../_utils/speakers.json';
import { Speaker } from './speaker';

export const Speakers = () => {
	const [speakers, setSpeakers] = useState(data.speakers);
	const affiche = () => {
		console.log(speakers);
	};
	const primary_text = {
		color: '#0d1130',
	};
	return (
		<div id='speakers'>
			<section
				class='hero-wrap hero-wrap-2'
				style={{ backgroundImage: 'url(/image/bg_1.jpg)' }}
			>
				<div class='overlay'></div>
				<div class='container'>
					<div class='row m-50 no-gutters slider-text-about align-items-center justify-content-center'>
						<div class='col-md-9 ftco-animate text-center'>
							<h1 class='mb-2 bread'>Speakers</h1>
							<p class='breadcrumbs'>
								<span class='mr-2'>
									<a href='index.html'>
										Home <i class='ion-ios-arrow-forward'></i>
									</a>
								</span>{' '}
								<span>
									{' '}
									Speakers <i class='ion-ios-arrow-forward'></i>
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<section class='speaker-bg section-padding'>
				<div class='container'>
					<div class='section-intro section-intro-white text-center pb-98px'>
						{/* <p class='section-intro__title'>Join the event</p> */}
						<h2 class='primary-text' style={primary_text} onClick={affiche}>
							Meet The Speakers
						</h2>
					</div>
					<div class='row'>
						{speakers.map((speaker) => (
							<Speaker speaker={speaker}></Speaker>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
