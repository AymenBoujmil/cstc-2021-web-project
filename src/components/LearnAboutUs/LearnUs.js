import React, { useEffect } from 'react';
import './LearnAboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

export const LearnUs = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div class='about'>
			<div class='container-fluid'>
				<div class='row align-items-center'>
					<div class='col-md-6'>
						<div id='video-section' data-aos='fade-up-right'>
							<div
								class='youtube-player '
								id='video-place'
								data-id='jssO8-5qmag'
							></div>
							<iframe
								width='100%'
								height='365px'
								src='https://drive.google.com/file/d/1wLQGj2u3yxKP_vOfWl1ds52pOKd9pUOL/preview'
								frameborder='0'
								allow='autoplay; encrypted-media'
								allowfullscreen
							></iframe>
						</div>
					</div>
					<div class='col-md-6' data-aos='fade-up-left'>
						<p class='text-part'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							nec pretium mi. Curabitur facilisis ornare velit non vulputate.
							Aliquam metus tortor, auctor id gravida condimentum, viverra quis
							sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean
							consectetur convallis porttitor. Aliquam interdum at lacus non
							blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Phasellus nec pretium mi. Curabitur facilisis ornare velit non
							vulputate. Aliquam metus tortor, auctor id gravida condimentum,
							viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
							Aenean consectetur convallis porttitor. Aliquam interdum at lacus
							non blandit.
						</p>
						<a className='button button-header' href='#'>
							About CSTC
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
