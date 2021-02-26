import React, { useState } from 'react';
// import data from '../../_utils/schedule/day1.json';
import { Schedule } from './Schedule';
import { Schedule_card } from './schedule-card';

export const Day1 = (props) => {
	// const [day1, setday1] = useState(data.day1);

	return (
		<div>
			<div id='day1' class='tab-pane'>
				{' '}
				{props.day.map((card) => (
					
					<Schedule_card day={card} affiche={props.affiche}></Schedule_card>
				))}{' '}
				{/* <p onClick={props.affiche}> affiche</p> */}
			</div>
		</div>
	);
};
