import React, { useState } from 'react';
import data from '../../_utils/speakers.json';
import { Speaker } from './speaker';

export const Speakers = () => {
	const [speakers, setSpeakers] = useState(data.speakers);
	const affiche = () => {
		console.log(speakers);
	};
	return (
		<div>
			<section class='speaker-bg section-padding'>
				<div class='container'>
					<div class='section-intro section-intro-white text-center pb-98px'>
						<p class='section-intro__title'>Join the event</p>
						<h2 class='primary-text text-dark' onClick={affiche}>
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
