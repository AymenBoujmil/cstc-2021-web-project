import React from 'react';
import { Day1 } from './day1';

export const Schedule = () => {
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
										<a data-toggle='tab' href='#day1'>
											<h4>Day 1</h4>
											<p>23 April, 2021</p>
										</a>
									</li>
									<li class='nav-item text-center'>
										<a class='active' data-toggle='tab' href='#day2'>
											<h4>Day 2</h4>
											<p>24 April, 2021</p>
										</a>
									</li>
									<li class='nav-item text-center'>
										<a data-toggle='tab' href='#day3'>
											<h4>Day 3</h4>
											<p>25 April, 2021</p>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class='tab-content'>
						<Day1></Day1>
					</div>
				</div>
			</section>
		</div>
	);
};
