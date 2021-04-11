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
									src='image/speakers/speaker-1.png'
									alt=''
									style={{ borderRadius: '50%' }}
								/>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='profile-head'>
								<h5>Kshiti Ghelani</h5>
								<h6>Web Developer and Designer</h6>

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
								<p>SKILLS</p>
								<a href=''>Web Designer</a>
								<br />
								<a href=''>Web Developer</a>
								<br />
								<a href=''>WordPress</a>
								<br />
								<a href=''>WooCommerce</a>
								<br />
								<a href=''>PHP, .Net</a>
								<br />
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
											<p>Kshiti Ghelani</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Email</label>
										</div>
										<div className='col-md-6'>
											<p>kshitighelani@gmail.com</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Phone</label>
										</div>
										<div className='col-md-6'>
											<p>123 456 7890</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Profession</label>
										</div>
										<div className='col-md-6'>
											<p>Web Developer and Designer</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Profession</label>
										</div>
										<div className='col-md-6'>
											<p>Web Developer and Designer</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Facebook</label>
										</div>
										<div className='col-md-6'>
											<p>facebook.com/blablabla</p>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-6'>
											<label>Linkedin</label>
										</div>
										<div className='col-md-6'>
											<p>Linkedin.com/blablabla</p>
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
									<p className='about-text'>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Velit, possimus minus dolorem unde molestias laboriosam
										repudiandae voluptatibus, fugiat voluptatum eos voluptatem.
										Alias fuga reiciendis dolore at aut eum nam voluptate illum.
										Laborum quod consequatur incidunt alias perferendis,
										quisquam sunt omnis non officia assumenda quas! Nostrum
										doloremque blanditiis quo aut sit. Perspiciatis explicabo
										veritatis repudiandae ipsum omnis minima sed sit odio harum
										id labore, totam qui aliquid ex ratione, deserunt nostrum
										voluptatem odit cum corrupti illo! Neque similique magnam
										ipsa in cum alias, rerum id asperiores aliquid eaque impedit
										accusantium! Doloremque iste esse quaerat error, excepturi
										soluta accusamus eum quidem facere!
									</p>
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
