import React, { useEffect, useState } from 'react';
import SpeakerInfo from './speakerInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';

const styleIcon = {
	color: '#7affbe',
};

export const Speaker = (props) => {
	const affiche = () => {
		console.log(props.speaker);
	};
	const [openPopup, setopenPopup] = useState(false);
	useEffect(() => {
		console.log(openPopup);
	}, [openPopup]);
	const handleClose = () => {
		setopenPopup(false);
	};
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div class='col-lg-4 col-sm-6 mb-4 mb-lg-0' data-aos='zoom-in'>
			<div
				class='card-speaker'
				onClick={() => {
					setopenPopup(true);
				}}
			>
				<img class='card-img rounded-0' src={props.speaker.image} alt=''></img>
				<div class='speaker-footer'>
					<h4> {props.speaker.name} </h4>
					<p> {props.speaker.job} </p>
				</div>
				<div class='speaker-overlay'>
					<ul class='speaker-social'>
						<li>
							<a href='#'>
								<i class='fab fa-linkedin-in' style={styleIcon}></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<SpeakerInfo
				openPopup={openPopup}
				speaker={props.speaker}
				setopenPopup={setopenPopup}
				handleClose={handleClose}
			/>
		</div>
	);
};
