import React, { useEffect } from 'react';

export const Theme = (props) => {
	let affiche = () => {
		console.log(props);
	};

	return (
		<div>
			<div class='card-feature mb-5 mb-lg-0'>
				<div class='feature-icon'>
					<i class={props.theme.icon} aria-hidden='true'></i>
				</div>
				<h3>{props.theme.title}</h3>
				<p>{props.theme.text}</p>
			</div>
		</div>
	);
};
