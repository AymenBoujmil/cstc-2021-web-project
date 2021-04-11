import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import {
	HiOutlineHome,
	HiOutlineNewspaper,
	HiOutlineSpeakerphone,
} from 'react-icons/hi';
import { FaRegCalendarAlt } from 'react-icons/fa';

export const Navbar = () => {
	const [Shadow, setShadow] = useState(false);

	const changeShadow = () => {
		console.log(window.scrollY);
		if (window.scrollY > 550) {
			setShadow(true);
		} else setShadow(false);
	};
	window.addEventListener('scroll', changeShadow);
	const active = (e) => {};
	return (
		<div>
			<div classNameName='container'>
				<header className={Shadow ? 'header_area box-shadow' : 'header_area '}>
					<div className='main_menu'>
						<nav className='navbar navbar-expand-lg  '>
							<div className='container box_1620'>
								<a
									className='navbar-brand logo_h'
									href='index.html'
									style={{ color: '#76e7f1' }}
								>
									{/* <image src='../../assets/images/image.png' alt=''>
										{' '}
									</image> */}
									<h1 style={{ color: '#76e7f1' }}>LOGO</h1>
								</a>
								<button
									className='navbar-toggler'
									type='button'
									data-toggle='collapse'
									data-target='#navbarSupportedContent'
									aria-controls='navbarSupportedContent'
									aria-expanded='false'
									aria-label='Toggle navigation'
								>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
									<span className='icon-bar'></span>
								</button>

								<div
									className='collapse navbar-collapse offset'
									id='navbarSupportedContent'
								>
									<IconContext.Provider
										value={{
											size: '22px',
											style: { padding: '0px 4px 4px 0 ' },
										}}
									>
										<ul className='nav navbar-nav menu_nav justify-content-end'>
											<li className='nav-item '>
												<NavLink
													to='/'
													exact
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													<HiOutlineHome /> Home
												</NavLink>
											</li>
											<li className='nav-item'>
												<NavLink
													to='/aboutUs'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													<HiOutlineNewspaper />
													About Us
												</NavLink>
											</li>{' '}
											<li className='nav-item'>
												<NavLink
													to='/schedule'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													<FaRegCalendarAlt />
													Schedule
												</NavLink>
											</li>{' '}
											<li className='nav-item'>
												<NavLink
													to='/speakers'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													<HiOutlineSpeakerphone />
													Speakers
												</NavLink>
											</li>
										</ul>
									</IconContext.Provider>
								</div>
							</div>
						</nav>
					</div>
				</header>
			</div>
		</div>
	);
};
