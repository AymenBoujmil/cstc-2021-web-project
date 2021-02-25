import React, { useState } from 'react';
import data from '../../_utils/schedule/day1.json';
import { Schedule } from './Schedule';

export const Day1 = () => {
	const [day1, setday1] = useState(data.day1);

	return (
		<div>
			<div id='day1' class='tab-pane'>
				{' '}
				{day1.map((card) => (
					<Schedule day={day1}></Schedule>
				))}{' '}
			</div>
		</div>
	);
};
