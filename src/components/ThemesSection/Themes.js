import React, { useState } from 'react';
import data from '../../_utils/themes.json';
import { Theme } from './theme';

export const Themes = () => {
	let affiche = () => {
		console.log(themes);
	};

	const [themes, setthemes] = useState(data.themes);
	return (
		<div id='themes'>
			<div className='mt-5'>
				<div className='d-lg-flex justify-content-between'>
					{themes.map((theme) => (
						<Theme theme={theme}></Theme>
					))}
				</div>
			</div>
		</div>
	);
};
