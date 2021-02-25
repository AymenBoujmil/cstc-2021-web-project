import React from 'react';

export const Schedule_card = (props) => {
	return (
		<div>
			<div class='schedule-card'>
				<div class='row no-gutters'>
					<div class='col-md-3'>
						<div class='card-identity'>
							<img src={props.day.image} alt=''></img>
							<h3>{props.day.name}</h3>
						</div>
					</div>
					<div class='col-md-9 align-self-center'>
						<div class='schedule-content'>
							<p class='schedule-date'>{props.day.date}</p>
							<a class='schedule-title' href='#'>
								<h3>{props.day.title}</h3>
							</a>
							<p>{props.day.content}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
