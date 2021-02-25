import React, { useState } from 'react';
import data from '../../_utils/themes.json';
import { Theme } from './theme';

export const Themes = () => {
	let affiche = () => {
		console.log(themes);
	};
	const [themes, setthemes] = useState(data.themes);
	return (
		<div>
			<section class='section-margin bg-gray themes'>
				<div class='container'>
					<div class='section-intro text-center pb-98px'>
						<p class='section-intro__title' onClick={affiche}>
							Join the event
						</p>
						<h2 class='primary-text'>Why Join Us</h2>
						{/* <img src='img/home/section-style.png' alt=''></img> */}
					</div>
					<div class='d-lg-flex justify-content-between'>
						{themes.map((theme) => (
							<Theme theme={theme}></Theme>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
