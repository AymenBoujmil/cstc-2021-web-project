import React, { useState } from 'react';
import './aboutUs.css';
import { LearnUs } from '../LearnAboutUs/LearnUs';
import { IoIosClock } from 'react-icons/io';
import { ImBullhorn } from 'react-icons/im';

import { GiMicrophone } from 'react-icons/gi';
import { IoRocket } from 'react-icons/io5';

export const AboutUs = () => {
	const onStyle = {
		padding: '0 10px',
		fontSize: '72px',
		verticalAlign: 'middle',
		color: '#233e62',
		borderRadius: '4px',
		display: 'block',
		marginBottom: '-2px',
		lineHeight: '1',
		WebkitTransition: 'all 0.4s ease-in-out',
		transition: 'all 0.4s ease-in-out',
	};
	const outStyle = {
		padding: '0 10px',
		fontSize: '72px',
		verticalAlign: 'middle',
		color: '#fff',
		borderRadius: '4px',
		display: 'block',
		marginBottom: '-2px',
		lineHeight: '1',
		WebkitTransition: 'all 0.4s ease-in-out',
		transition: 'all 0.4s ease-in-out',
	};
	const [styleAlarm, setStyleClock] = useState(onStyle);
	const [styleBullhorn, setstyleBull] = useState(onStyle);
	const [styleRocket, setstyleRocket] = useState(onStyle);
	const [styleMic, setstyleMic] = useState(onStyle);
	const onMouseOver = () => {
		setStyleClock(onStyle);
	};
	const onMouseOut = () => {
		setStyleClock(outStyle);
	};
	const onMouseOverBull = () => {
		setstyleBull(onStyle);
	};
	const onMouseOutBull = () => {
		setstyleBull(outStyle);
	};
	const onMouseOverRocket = () => {
		setstyleRocket(onStyle);
	};
	const onMouseOutrocket = () => {
		setstyleRocket(outStyle);
	};
	const onMouseOverMic = () => {
		setstyleMic(onStyle);
	};
	const onMouseOutMic = () => {
		setstyleMic(outStyle);
	};

	return (
		<div id='about'>
			<section className='pt100 pb100'>
				<div className='container'>
					<div className='section_title text-center'>
						<h3 className='title primary-text'>About the event</h3>
					</div>
					<div className='row justify-content-center'>
						<div className='col-12 col-md-6'>
							<p className='text-part'>
								Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
								iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
								accumsan. Pellentesque convallis consectetur tortor id placerat.
								Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
								volutpat ligula euismod.
							</p>
						</div>
						<div className='col-12 col-md-6'>
							<p className='text-part'>
								In rhoncus massa nec sollicitudin. Ut hendrerit hendrerit nisl a
								accumsan. Pellentesque convallis consectetur tortor id placerat.
								Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
								volutpat ligula euismod quis. Maecenas ornare, ex in malesuada
								tempus.
							</p>
						</div>
					</div>
					<br></br>
					<div className='space-p'>
						<LearnUs></LearnUs>
					</div>
					<br></br>
					<div className='row justify-content-center mt30'>
						<div className='col-12 col-md-6 col-lg-3'>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverMic}
								onMouseOver={onMouseOutMic}
							>
								<GiMicrophone size='120px' style={styleMic} />{' '}
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
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverRocket}
								onMouseOver={onMouseOutrocket}
							>
								<IoRocket size='120px' style={styleRocket}></IoRocket>{' '}
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
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverBull}
								onMouseOver={onMouseOutBull}
							>
								<ImBullhorn size='120px' style={styleBullhorn}></ImBullhorn>

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
							<div
								className='icon_box_one'
								onMouseOut={onMouseOver}
								onMouseOver={onMouseOut}
							>
								<IoIosClock size='120px' style={styleAlarm}></IoIosClock>

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
