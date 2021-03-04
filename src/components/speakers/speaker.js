import React, { useEffect } from 'react';

export const Speaker = (props) => {
	const affiche = () => {
		console.log(props.speaker);
	};

	return (
		<div class='col-lg-4 col-sm-6 mb-4 mb-lg-0'>
			<div class='card-speaker'>
				<img class='card-img rounded-0' src={props.speaker.image} alt=''></img>
				<div class='speaker-footer'>
					<h4> {props.speaker.name} </h4>
					<p> {props.speaker.job} </p>
				</div>
				<div class='speaker-overlay'>
					<ul class='speaker-social'>
						<li>
							<a href='#'>
								<i class='ti-facebook'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i class='ti-twitter-alt'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i class='ti-instagram'></i>
							</a>
						</li>
						<li>
							<a href='#'>
								<i class='ti-skype'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
