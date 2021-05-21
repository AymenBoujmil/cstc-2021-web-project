import React, { useState, useEffect } from 'react';
import './aboutUs.css';
import { LearnUs } from '../LearnAboutUs/LearnUs';
import { IoIosClock } from 'react-icons/io';
import { ImBullhorn } from 'react-icons/im';
import { GiMicrophone } from 'react-icons/gi';
import { IoRocket } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const AboutUs = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	const onStyle = {
		padding: '0 15px',
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
					<div className='section_title text-center' style={{ overflowX:"hidden"}}>
						<h3 className='title primary-text' data-aos='zoom-in-down' style={{ overflowX:"hidden"}}>
							About the event
						</h3>
					</div>
					<div className='row justify-content-center' style={{ overflowX:"hidden"}}>
						<div className='col-12 col-md-6' data-aos='fade-down-right' style={{ overflowX:"hidden"}}>
							<p className='text-part'>
								Lorem ipsum dolor sit amet, consectetur adipiscing eli. Integer
								iaculis in lacus a sollicitudin. Ut hendrerit hendrerit nisl a
								accumsan. Pellentesque convallis consectetur tortor id placerat.
								Curabitur a pulvinar nunc. Maecenas laoreet finibus lectus, at
								volutpat ligula euismod.
							</p>
						</div>
						<div className='col-12 col-md-6' style={{ overflowX:"hidden"}}>
							<p className='text-part' data-aos='fade-down-left' style={{ overflowX:"hidden"}}>
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
					<div className='row justify-content-center mt30' style={{ overflowX:"hidden"}}>
						<div
							className='col-12 col-md-6 col-lg-3 col-sm-6'
							data-aos='zoom-in-up' style={{ overflowX:"hidden"}}
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverMic}
								onMouseOver={onMouseOutMic}
							>
								<div className='justify-content-center'>
									<div className='pad_icon'>
										<GiMicrophone size='120px' style={styleMic} />{' '}
									</div>
								</div>
								<div className='content'>
									<div className='pad_icon'>
										{' '}
										<h4>9 Speakers</h4>
									</div>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						<div style={{ overflowX:"hidden"}}>
						<div
							className='col-12 col-md-6 col-lg-3 col-sm-6'
							data-aos='zoom-in-down' style={{ overflowX:"hidden"}}
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverRocket}
								onMouseOver={onMouseOutrocket}
							>
								<div className='pad_icon'>
									<IoRocket size='120px' style={styleRocket}></IoRocket>{' '}
								</div>
								<div className='content'>
									<div className='pad_icon'>
										<h4>8 hrs Marathon</h4>
									</div>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						</div>
						<div style={{ overflowX:"hidden"}}>
						<div 
							className='col-12 col-md-6 col-lg-3 col-sm-6'
							data-aos='zoom-in-up' style={{ overflowX:"hidden"}}
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOverBull}
								onMouseOver={onMouseOutBull}
							>
								<div className='pad_icon'>
									{' '}
									<ImBullhorn size='120px' style={styleBullhorn}></ImBullhorn>
								</div>

								<div className='content'>
									<div className='pad_icon'>
										{' '}
										<h4>Live Broadcast</h4>{' '}
									</div>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						</div>
						<div style={{ overflowX:"hidden"}}>
						<div style={{ overflowX:"hidden"}}
							className='col-12 col-md-6
							 col-lg-3 col-sm-6'
							data-aos='zoom-in-down'
						>
							<div
								className='icon_box_one'
								onMouseOut={onMouseOver}
								onMouseOver={onMouseOut}
							>
								<div className='pad_icon'>
									{' '}
									<IoIosClock size='120px' style={styleAlarm}></IoIosClock>
								</div>

								<div className='content'>
									<div className='pad_icon'>
										{' '}
										<h4>Early Bird</h4>{' '}
									</div>
									<p className='aboutUsP'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										rhoncus massa nec graviante.
									</p>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
