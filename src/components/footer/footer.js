import React from 'react';
import { IconContext } from 'react-icons';
import { MdEmail, MdPhone, MdPinDrop, MdCopyright } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export const footer = () => {
	const copyRStyle = {
		padding: '4px',
		color: '#797979',
	};
	const contactStyle = {
		padding: '1px  6px 0 0',
		color: '#797979',
	};
	return (
		<div>
			<footer className='footer-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4  col-md-6 col-sm-6'>
							<div className='single-footer-widget'>
								<h6>About CSTC</h6>
								<p>
									The world has become so fast paced that people don’t want to
									stand by reading a page of information to be they would much
									rather look at a presentation and understand the message.
								</p>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-6'>
							<div className='single-footer-widget'>
								<h6>Navigation Links</h6>
								<div className='row'>
									<div className='col'>
										<ul>
											<li>
												<NavLink
													to='/'
													exact
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													Home
												</NavLink>
											</li>
											<li>
												<NavLink
													to='/about'
													exact
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													about
												</NavLink>
											</li>
											<li>
												<NavLink
													to='/schedule'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													Schedule
												</NavLink>
											</li>
										</ul>
									</div>
									<div className='col'>
										<ul>
											<li>
												<NavLink
													to='/speakers'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													{' '}
													Speakers
												</NavLink>
											</li>
											<li>
												<NavLink
													to='/hotel'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													Hotel
												</NavLink>{' '}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4  col-md-6 col-sm-6'>
							<IconContext.Provider
								value={{
									color: '#797979',
									size: '22px',
									style: { padding: '2px 3px 0 0 ' },
								}}
							>
								<div class='single-footer-widget'>
									<h6>Contact</h6>
									<ul>
										<li>
											<div className='row'>
												{/* <i class={MdEmail} style={contactStyle}></i>{' '} */}
												<MdPinDrop></MdPinDrop>
												<p>676 INSAT Centre Urbain Nord BP، Tunis Cedex 1080</p>
											</div>
										</li>
										<li>
											<div className='row'>
												<MdPhone></MdPhone>
												<p>99-999-999</p>
											</div>
										</li>
										<li>
											<div className='row'>
												<MdEmail></MdEmail>

												<p>cstc.donotreply@gmail.com</p>
											</div>
										</li>
									</ul>
								</div>
							</IconContext.Provider>
						</div>
					</div>
				</div>
				<IconContext.Provider
					value={{
						color: '#797979',
						size: '23px',
						style: { padding: '0 3px 4px 0 ', fontSize: '40px' },
					}}
				>
					<div className='footer-bottom'>
						<div className='container'>
							<div className='row align-items-center'>
								<p className='col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left'>
									<MdCopyright></MdCopyright> Copyright All rights{' '}
								</p>
								<div className='col-lg-4 col-sm-12 footer-social text-center text-lg-right'>
									<a href='#'>
										<i className='fab fa-facebook-f'></i>
									</a>
									<a href='#'>
										<i className='fab fa-twitter'></i>
									</a>
									<a href='#'>
										<i className='fab fa-dribbble'></i>
									</a>
									<a href='#'>
										<i className='fab fa-behance'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</IconContext.Provider>
			</footer>
		</div>
	);
};
