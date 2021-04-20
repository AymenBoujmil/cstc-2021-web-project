import React, { useEffect } from 'react';
import {
	FaMapMarkerAlt,
	FaFacebook,
	FaInstagram,
	FaPhone,
} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

import { IconContext } from 'react-icons';
import './speakerInfo.css';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';

function SpeakerInfo(props) {
	const affiche = () => {
		console.log(props.speaker.skills);
		props.speaker.skills.map((skill) => {
			console.log(skill);
		});
	};
	const Affiche = (skill) => {
		console.log(skill);
	};
	console.log(props);
	return (
		<Dialog open={props.openPopup} onClose={props.handleClose} maxWidth='md'>
			<DialogContent>
				{' '}
				<div className=' container emp-profile'>
					<div className='row'>
						<div className='col-md-4'>
							<div className='profile-img'>
								<img
									src={props.speaker.image}
									alt=''
									style={{ borderRadius: '50%' }}
								/>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='profile-head'>
								<h5>{props.speaker.name}</h5>
								<h6>{props.speaker.job}</h6>

								<ul className='nav nav-tabs' id='myTab' role='tablist'>
									<li className='nav-item'>
										<a
											className='nav-link active'
											id='home-tab'
											data-toggle='tab'
											href='#home'
											role='tab'
											aria-controls='home'
											aria-selected='true'
										>
											About
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link'
											id='profile-tab'
											data-toggle='tab'
											href='#profile'
											role='tab'
											aria-controls='profile'
											aria-selected='false'
										>
											About Me
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-4'>
							<div className='profile-work'>
								<p onClick={affiche}>SKILLS</p>
								{props.speaker.skills.map((skill) => (
									<div>
										{' '}
										<a href=''>{skill}</a>
										<br />{' '}
									</div>
								))}
							</div>
						</div>
						<div className='col-md-8'>
							<div className='tab-content profile-tab' id='myTabContent'>
								<div
									className='tab-pane fade show active'
									id='home'
									role='tabpanel'
									aria-labelledby='home-tab'
								>
									<div className='row'>
										<div className='col-md-6'>
											<label>Name</label>
										</div>
										<div className='col-md-6'>
											<p>{props.speaker.name}</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Email</label>
										</div>
										<div className='col-md-6'>
											<p> {props.speaker.email} </p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Phone</label>
										</div>
										<div className='col-md-6'>
											<p> {props.speaker.phone} </p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Profession</label>
										</div>
										<div className='col-md-6'>
											<p> {props.speaker.job} </p>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-6'>
											<label>Facebook</label>
										</div>
										<div className='col-md-6'>
											<p>{props.speaker.facebook}</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Linkedin</label>
										</div>
										<div className='col-md-6'>
											<p> {props.speaker.linkedin} </p>
										</div>
									</div>
								</div>
								<div
									className='tab-pane fade'
									id='profile'
									role='tabpanel'
									aria-labelledby='profile-tab'
								>
									<h4 className='about-me'>About Me</h4>
									<p className='about-text'>{props.speaker.aboutMe}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export default SpeakerInfo;
