import React, { useEffect } from 'react';

export const Theme = (props) => {
	let affiche = () => {
		console.log(props);
	};

	return (
		<div>
			<div className='card-feature mb-5 mb-lg-0'>
				<div className='feature-icon'>
					<i className={props.theme.icon} aria-hidden='true'></i>
				</div>
				<h3>{props.theme.title}</h3>
				<p>{props.theme.text}</p>
			</div>
		</div>
	);
};
