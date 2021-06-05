import React, { useState, useEffect } from 'react';

import { Day } from './day';
import data from '../../_utils/themes.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

import data1 from '../../_utils/schedule/day1.json';
import data2 from '../../_utils/schedule/day2.json';
import data3 from '../../_utils/schedule/day3.json';
import data12 from '../../_utils/schedule/day1-2.json';
import data22 from '../../_utils/schedule/day2-2.json';
import data32 from '../../_utils/schedule/day3-2.json';
import data13 from '../../_utils/schedule/day1-3.json';
import data23 from '../../_utils/schedule/day2-3.json';
import data33 from '../../_utils/schedule/day3-3.json';

export const Schedule = () => {
	const [themes, setthemes] = useState(data.themes);
	const [theme, setTheme] = useState(1);
	const [themeName, setThemeName] = useState(' Machine learning ');

	const [day, setDay] = useState(data1.day1);
	const [numDay, setNumDay] = useState('day1');
	let affiche = () => {
		console.log(day);
	};

	const changeDayTheme = (them) => {
		let dayV = numDay.slice(0, 4);
		console.log(dayV);
		switch (dayV) {
			case 'day1':
				switch (them) {
					case 2:
						setDay(data12.day1);

						break;
					case 3:
						setDay(data13.day1);
						break;
					default:
						setDay(data1.day1);
						break;
				}

				break;
			case 'day2':
				switch (theme) {
					case 2:
						setDay(data22.day2);
						break;
					case 3:
						setDay(data23.day2);

						break;
					default:
						setDay(data2.day2);
						break;
				}

				void restartAnimation;
				break;
			case 'day3':
				switch (theme) {
					case 2:
						setDay(data32.day3);
						break;
					case 3:
						setDay(data33.day3);
						break;
					default:
						setDay(data3.day3);
						break;
				}

				void restartAnimation;
				break;
		}
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
				switch (theme) {
					case 2:
						setDay(data12.day1);
						break;
					case 3:
						setDay(data13.day1);
						break;
					default:
						setDay(data1.day1);
						break;
				}
				setNumDay('day1');

				break;
			case 'day2':
				switch (theme) {
					case 2:
						setDay(data22.day2);
						break;
					case 3:
						setDay(data23.day2);

						break;
					default:
						setDay(data2.day2);
						break;
				}
				setNumDay('day2');

				void restartAnimation;
				break;
			case 'day3':
				switch (theme) {
					case 2:
						setDay(data32.day3);
						break;
					case 3:
						setDay(data33.day3);
						break;
					default:
						setDay(data3.day3);
						break;
				}
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

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, [theme]);

	return (
		<div id='schedule'>
			<section
				class='hero-wrap hero-wrap-2'
				style={{
					overflowX: 'hidden',
					overflowY: 'hidden',
					backgroundImage: 'url(/image/insat.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
				}}
			>
				<div class='overlay'></div>
				<div class='container'>
					<div class='row m-50 no-gutters slider-text-about align-items-center justify-content-center'>
						<div class='col-md-9 ftco-animate text-center'>
							<h1 class='mb-2 bread'>Schedule</h1>
							<p class='breadcrumbs'>
								“Transparency may be the most disruptive and far-reaching
								innovation to come out of social media.” — Paul Gillin
							</p>
						</div>
					</div>
				</div>
			</section>

			<div class='wrap-about pr-md-4 ftco-animate container mt-5'>
				<div data-aos='fade-down-right' style={{ overflowX: 'hidden' }}>
					<h2 class='mb-4'>Our Program</h2>
					<p>
						To present our theme for this year we prepared a diversified
						program. During 3 days there will be conferences, debates, and
						different tracks for workshops so you can choose the ones that fit
						your learning goals the best. It also includes networking activities
						as the congress will welcome students from across the country
					</p>
				</div>
				<div id='themes'>
					<div className='mt-5'>
						<div className='d-lg-flex justify-content-between'>
							{themes.map((theme) => (
								<div
									className='card-feature mb-5 mb-lg-0'
									style={{ cursor: 'pointer' }}
									data-aos='fade-up'
									style={{ overflowX: 'hidden' }}
									onClick={() => {
										changeDayTheme(theme.theme);
										setThemeName(theme.track);

										setTheme(theme.theme);
										console.log(theme.theme);
									}}
								>
									<div className='feature-icon'>
										<i className={theme.icon} aria-hidden='true'></i>
									</div>
									<h3>{theme.title}</h3>
									<p>{theme.text}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<section className='section-margin mb-5 pb-5'>
				<div className='container'>
					<div
						class='section-intro section-intro-white text-center pb-98px'
						data-aos='zoom-in-down'
						style={{ overflowX: 'hidden' }}
					>
						{' '}
						<h2 className='primary-text'>Conference Schedule</h2>{' '}
						<h4 class='primary-text'>Track : {themeName} </h4>
					</div>

					<div style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
						<div
							className='row'
							data-aos='zoom-out'
							style={{ overflowX: 'hidden' }}
						>
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
												<p>19 June, 2021</p>
											</a>
										</li>
										<li className='nav-item text-center'>
											<a data-toggle='tab' href='#day2' onClick={changeDay}>
												<h4>Day 2</h4>
												<p>20 June, 2021</p>
											</a>
										</li>
										<li className='nav-item text-center'>
											<a data-toggle='tab' href='#day3' onClick={changeDay}>
												<h4>Day 3</h4>
												<p>21 June, 2021</p>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div
						className='tab-content'
						data-aos='zoom-out-right'
						style={{ overflowX: 'hidden', overflowY: 'hidden' }}
					>
						<Day day={day} numDay={numDay} affiche={affiche}></Day>
					</div>
				</div>
			</section>
		</div>
	);
};
