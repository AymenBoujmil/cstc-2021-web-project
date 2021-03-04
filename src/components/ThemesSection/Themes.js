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
			<section className='section-margin bg-gray themes'>
				<div className='container'>
					<div className='section-intro text-center pb-98px '>
						{/* <p className='section-intro__title' onClick={affiche}>
							Join the event
						</p> */}
						<h2 className='primary-text'>Why Join Us</h2>
						{/* <img src='img/home/section-style.png' alt=''></img> */}
					</div>
					<div className='d-lg-flex justify-content-between'>
						{themes.map((theme) => (
							<Theme theme={theme}></Theme>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};
