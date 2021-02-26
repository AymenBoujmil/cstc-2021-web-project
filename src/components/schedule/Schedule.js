import React, { useState } from 'react';
import { Day1 } from './day1';
import data1 from '../../_utils/schedule/day1.json';
import data2 from '../../_utils/schedule/day2.json';
import data3 from '../../_utils/schedule/day3.json';

export const Schedule = () => {
	const [day, setDay] = useState(data1.day1);
	let affiche = () => {
		console.log(day);
	};
	const changeDay = (e) => {
		console.log(e.target.parentNode);
		let a = e.target;
		if (e.target.nodeName != 'A') {
			a = e.target.parentNode;
		}
		let dayV = a.getAttribute('href').slice(1, 5);
		console.log(dayV);

		switch (dayV) {
			case 'day1':
				setDay(data1.day1);
				break;
			case 'day2':
				setDay(data2.day2);
				break;
			case 'day3':
				setDay(data3.day3);
				break;
		}
	};
	return (
		<div>
			<section class='section-margin mb-5 pb-5'>
				<div class='container'>
					<div class='section-intro text-center pb-98px'>
						<p class='section-intro__title'>Join the event</p>
						<h2 class='primary-text'>Conference Schedule</h2>
					</div>

					<div class='row'>
						<div class='col-xl-10 offset-xl-1'>
							<div class='scheduleTab'>
								<ul class='nav nav-tabs'>
									<li class='nav-item text-center'>
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
									<li class='nav-item text-center'>
										<a data-toggle='tab' href='#day2' onClick={changeDay}>
											<h4>Day 2</h4>
											<p>24 April, 2021</p>
										</a>
									</li>
									<li class='nav-item text-center'>
										<a data-toggle='tab' href='#day3' onClick={changeDay}>
											<h4>Day 3</h4>
											<p>25 April, 2021</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class='tab-content'>
						<Day1 day={day} affiche={affiche}></Day1>
					</div>
				</div>
			</section>
		</div>
	);
};
