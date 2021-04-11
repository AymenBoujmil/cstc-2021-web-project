import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Day } from './day';

import data1 from '../../_utils/schedule/day1.json';
import data2 from '../../_utils/schedule/day2.json';
import data3 from '../../_utils/schedule/day3.json';

export const Schedule = () => {
	const [day, setDay] = useState(data1.day1);
	const [numDay, setNumDay] = useState('day1');
	let affiche = () => {
		console.log(day);
	};
	const changeDay = (e) => {
		let a = e.target;
		if (e.target.nodeName != 'A') {
			a = e.target.parentNode;
		}
		let dayV = a.getAttribute('href').slice(1, 5);
		console.log(dayV);
		let k = document.getElementsByClassName('tab-pane');
		let f = k[0];
		console.log(f);
		console.log(k);
		f.classList.remove('active');
		f.classList.add('non-active');
		f.classList.remove('non-active');
		console.log(f);
		void f.offsetWidth;
		f.classList.add('active');

		void restartAnimation;

		switch (dayV) {
			case 'day1':
				setDay(data1.day1);
				setNumDay('day1');

				break;
			case 'day2':
				setDay(data2.day2);
				setNumDay('day2');
				void restartAnimation;
				break;
			case 'day3':
				setDay(data3.day3);
				setNumDay('day3');
				void restartAnimation;
				break;
		}
	};
	const restartAnimation = (e) => {
		let a = document.getElementsByClassName('tab-pane');
		console.log('salem');
		a.classList.remove('active');
		a.classList.add('non-active');
		a.classList.remove('non-active');
		console.log(a);
		void a.offsetWidth;
		a.classList.add('active');
	};
	return (
		<div id='schedule'>
			<section className='section-margin mb-5 pb-5'>
				<div className='container'>
					<div class='section-intro section-intro-white text-center pb-98px'>
						{' '}
						{/* <p className='section-intro__title'>Join the event</p> */}
						<h2 className='primary-text' style={{ color: '#0d1130' }}>
							Conference Schedule
						</h2>
					</div>

					<div className='row'>
						<div className='col-xl-10 offset-xl-1'>
							<div className='scheduleTab'>
								<ul className='nav nav-tabs'>
									<li className='nav-item text-center'>
										<a
											className='active'
											data-toggle='tab'
											href='#day1'
											onClick={changeDay}
										>
											<h4>Day 1</h4>
											<p>23 April, 2021</p>
										</a>
									</li>
									<li className='nav-item text-center'>
										<a data-toggle='tab' href='#day2' onClick={changeDay}>
											<h4>Day 2</h4>
											<p>24 April, 2021</p>
										</a>
									</li>
									<li className='nav-item text-center'>
										<a data-toggle='tab' href='#day3' onClick={changeDay}>
											<h4>Day 3</h4>
											<p>25 April, 2021</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className='tab-content'>
						<Day day={day} numDay={numDay} affiche={affiche}></Day>
					</div>
				</div>
			</section>
		</div>
	);
};
