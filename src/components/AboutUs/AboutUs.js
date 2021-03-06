import React from 'react';
import './aboutUs.css';
import { IoIosClock } from 'react-icons/io';

const primary_text = {
	color: '#f50136',
};
export const AboutUs = () => {
	return (
		<div>
			<section className='pt100 pb100'>
				<div className='container'>
					<div className='section_title text-center'>
						<h3 className='title' style={primary_text}>
							About the event
						</h3>
					</div>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-6'>
							<p className='aboutUsP'>
								Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
								iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
								accumsan. Pellentesque convallis consectetur tortor id placerat.
								Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
								volutpat ligula euismod.
							</p>
						</div>
						<div className='col-12 col-md-6'>
							<p className='aboutUsP'>
								In rhoncus massa nec sollicitudin. Ut hendrerit hendrerit nisl a
								accumsan. Pellentesque convallis consectetur tortor id placerat.
								Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
								volutpat ligula euismod quis. Maecenas ornare, ex in malesuada
								tempus.
							</p>
						</div>
					</div>

					<div className='row justify-content-center mt30'>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='icon_box_one'>
								<i className='fas fa-microphone'></i>
								<div className='content'>
									<h4>9 Speakers</h4>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='icon_box_one'>
								<i className='fas fa-rocket'></i>{' '}
								<div className='content'>
									<h4>8 hrs Marathon</h4>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='icon_box_one'>
								<i className='fas fa-bullhorn'></i>{' '}
								<div className='content'>
									<h4>Live Broadcast</h4>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='icon_box_one'>
								<i className='far fa-clock'></i>{' '}
								<div className='content'>
									<h4>Early Bird</h4>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						<div className='col-12 col-md-6 col-lg-3'>
							<div className='icon_box_one'>
								<i className='far fa-clock'></i>{' '}
								<div className='content'>
									<h4>Early Bird</h4>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
