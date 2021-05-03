import React, { useState, useEffect } from 'react';
import data from '../../_utils/speakers.json';
import data2 from '../../_utils/themes.json';

import { Speaker } from './speaker';

export const Speakers = () => {
	const [speakers, setSpeakers] = useState(data.speakers);
	const [allSpeakers, setAllSpeakers] = useState(data.speakers);
	const [themes, setThemes] = useState(data2.themes);
	const [theme, setTheme] = useState(0);
	const [themeName, setThemeName] = useState(' all tracks ');
	const affiche = () => {
		console.log(speakers);
	};
	const primary_text = {
		color: '#0d1130',
	};
	const speakersByTheme = (them) => {
		if (theme != 0) {
			setSpeakers(
				allSpeakers.filter(
					(speaker) => speaker.theme.toString().localeCompare(them) == 0
				)
			);
		}
		
	};
	useEffect(() => {}, [theme]);
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
								“You only live once, but if you do it right, once is enough.” —
								Mae West
							</p>
						</div>
					</div>
				</div>
			</section>
			<div class='wrap-about pr-md-4 ftco-animate container mt-5'>
				<h2 class='mb-4'>Our Speakers</h2>
				<p>
					On her way she met a copy. The copy warned the Little Blind Text, that
					where it came from it would have been rewritten a thousand times and
					everything that was left from its origin would be the word. Lorem
					ipsum, dolor sit amet consectetur adipisicing elit.
				</p>
				<div id='themes'>
					<div className='mt-5'>
						<div className='d-lg-flex justify-content-between'>
							{themes.map((theme) => (
								<div
									className='card-feature mb-5 mb-lg-0'
									style={{ cursor: 'pointer' }}
									onClick={() => {
										speakersByTheme(theme.theme);
										setThemeName(theme.track);
										setTheme(theme.theme);
										console.log(theme.theme);
									}}
								>
									<div className='feature-icon'>
										<i className={theme.icon} aria-hidden='true'></i>
									</div>
									<h3>{theme.title}</h3>
									<p>{theme.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<section class='speaker-bg section-padding'>
				<div class='container'>
					<div class='section-intro section-intro-white text-center pb-80px'>
						{/* <p class='section-intro__title'>Join the event</p> */}
						<h2 class='primary-text' style={primary_text} onClick={affiche}>
							Meet The Speakers
						</h2>
						<h4 class='primary-text'>Track : {themeName} </h4>
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
