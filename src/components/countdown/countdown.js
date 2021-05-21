import React, { useState, useEffect } from 'react';
import '../../assets/css/countdown.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Countdown = () => {
	const [countdownDate] = useState(new Date('6/12/2021').getTime());
	const [state, setState] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		setInterval(() => setNewTime(), 1000);
		AOS.init({
			duration: 2000,
		});
	}, []);

	const setNewTime = () => {
		if (countdownDate) {
			const currentTime = new Date().getTime();

			const distanceToDate = countdownDate - currentTime;

			let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor(
				(distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

			const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

			days = `${days}`;
			if (numbersToAddZeroTo.includes(hours)) {
				hours = `0${hours}`;
			} else if (numbersToAddZeroTo.includes(minutes)) {
				minutes = `0${minutes}`;
			} else if (numbersToAddZeroTo.includes(seconds)) {
				seconds = `0${seconds}`;
			}

			setState({ days: days, hours: hours, minutes, seconds });
		}
	};
	let day = state.days;
	return (
		// <Fade>
		// 	<div className='size1  flex-c-m  p-b-55 p-l-15 p-r-15'>
		// 		<div className='wsize1'>
		// 			<div className='flex-w flex-sa-m cd100 bor1 p-t-42 p-b-22 p-l-50 p-r-50 respon1'>
		// 				<div className='flex-col-c-m wsize2 m-b-20'>

		// 				<span className='l1-txt2 p-b-4 days'>{ day || '0'}</span>

		//         	<span className='m2-txt2'>Days</span>
		// 				</div>

		// 				<span className='l1-txt2 p-b-22'>:</span>

		// 				<div className='flex-col-c-m wsize2 m-b-20'>
		// 					<span className='l1-txt2 p-b-4 hours'>
		//           {state.hours || '00'}
		//           </span>
		// 					<span className='m2-txt2'>Hours</span>
		// 				</div>

		// 				<span className='l1-txt2 p-b-22 respon2'>:</span>

		// 				<div className='flex-col-c-m wsize2 m-b-20'>
		// 					<span className='l1-txt2 p-b-4 minutes'>
		//           {state.minutes || '00'}
		//           </span>
		// 					<span className='m2-txt2'>Minutes</span>
		// 				</div>

		// 				<span className='l1-txt2 p-b-22'>:</span>

		// 				<div className='flex-col-c-m wsize2 m-b-20'>
		// 					<span className='l1-txt2 p-b-4 seconds'>{state.seconds || '00'}</span>
		// 					<span className='m2-txt2'>Seconds</span>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		//   </Fade>
		<section class='section-padding--small'>
			<div class='container'>
				<div class='row' style={{ overflowX: 'hidden' }}>
					<div
						class='col-lg-6 align-self-center mb-5 mb-lg-0'
						data-aos='fade-down-left'
						style={{ overflowX: 'hidden' }}
					>
						<div class='innovative-wrapper'>
							<h3 class='primary-text'>
								Innovative With Experience <br class='d-none d-xl-block' /> UX
								Design 2019
							</h3>
							<p class='h4 primary-text3 mb-3'>
								Where The business World Meets
							</p>
							<p>
								Morning steas great earth for divide our good sixth called
								abunda itseld appear fisrd seaton upon above may bearing all
								moveth morning make subdue stars they are a goreat eart divide
								our good sixth one of that
							</p>
						</div>
					</div>
					<div
						class='col-lg-6 pl-xl-5'
						data-aos='fade-down-right'
						style={{ overflowX: 'hidden' }}
					>
						<ul class='clockdiv text-center' id='clockdiv'>
							<li class='clockdiv-single clockdiv-day'>
								<h1 class='days'>{day || '0'}</h1>
								<span class='smalltext'>Days</span>
							</li>
							<li class='clockdiv-single clockdiv-hour'>
								<h1 class='hours'> {state.hours || '00'}</h1>
								<span class='smalltext'>Hours</span>
							</li>
							<li class='clockdiv-single clockdiv-minute'>
								<h1 class='minutes'>{state.minutes || '00'}</h1>
								<span class='smalltext'>Mins</span>
							</li>
						</ul>

						<div class='clockdiv-content text-center'>
							<p class='h4 primary-text3 mb-2'>
								June 19 -22, 2021 in Hamamet City
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Countdown;
