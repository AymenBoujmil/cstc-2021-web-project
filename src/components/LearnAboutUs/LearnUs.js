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
							In its very first edition, the congress theme will be Social
							Networks: "The rise of Social Media: our World in Data". This
							theme will allow us to discuss the tools and technology that give
							social media its power. We will also discuss the impact of social
							networks on our personal and professional lives.{' '}
							<p className='text-part'>
								To properly analyze the subject, we invited Tunisian experts in
								this field. Thanks to their rich backgrounds in practical
								experiences in major companies(Google, Facebook, Amazon ...),
								our speakers will transmit the advances in knowledge and
								innovation of the digital world. Furthermore, a psychologist
								will be present among us to discuss this topic. As for soft
								skills, participants will attend workshops provided by highly
								qualified Tunisian coaches.
							</p>
						</p>
						<NavLink to='/about' className='button button-header'>
							About CSTC{' '}
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};
