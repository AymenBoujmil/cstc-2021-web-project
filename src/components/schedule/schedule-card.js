import React from 'react';

const cg = {
	color: '#838383',
};
export const Schedule_card = (props) => {
	return (
		<div>
			<div className='schedule-card'>
				<div className='row no-gutters'>
					<div className='col-md-3'>
						<div className='card-identity'>
							<img src={props.day.image} alt=''></img>
							<h3>{props.day.name}</h3>
						</div>
					</div>
					<div className='col-md-9 align-self-center'>
						<div className='schedule-content'>
							<p className='schedule-date'>{props.day.date}</p>
							<a className='schedule-title' href='#'>
								<h3>{props.day.title}</h3>
							</a>
							<p style={cg}>{props.day.content}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
