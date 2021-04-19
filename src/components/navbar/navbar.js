import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {
	HiOutlineHome,
	HiOutlineNewspaper,
	HiOutlineSpeakerphone,
} from 'react-icons/hi';
import { RiHotelBedLine } from 'react-icons/ri';
import { FaRegCalendarAlt, FaHotel } from 'react-icons/fa';

export const Navbar = () => {
	const [Shadow, setShadow] = useState(false);
	const [Place, setPlace] = useState(false);
	const [Width, setWidth] = useState(false);
	const changeShadow = () => {
		console.log(window.scrollY);
		if (window.scrollY > 550) {
			setShadow(true);
		} else setShadow(false);
	};
	window.addEventListener('scroll', changeShadow);
	const [colorChange, setColorchange] = useState(false);
	const changeNavbarColor = () => {
		if (window.scrollY >= 40) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);
	const changeWidth = () => {
		console.log(window.innerWidth);
		if (window.innerWidth < 1000) {
			setWidth(true);
		} else setWidth(false);
	};
	window.addEventListener('resize', changeWidth);
	const active = (e) => {};
	const location = useLocation();
	useEffect(() => {
		const currentPath = location.pathname;

		if (currentPath !== '/') {
			setPlace(true);
		} else {
			setPlace(false);
		}
		console.log(currentPath);
	}, [location]);

	return (
		<div>
			<div classNameName='container'>
				<header className={Shadow ? 'header_area box-shadow' : 'header_area '}>
					<div className='main_menu'>
						<nav
							className={
								colorChange || Width || Place
									? 'navbar navbar-expand-lg '
									: 'navbar navbar-expand-lg bg-transparent'
							}
						>
							<div className='container box_1620'>
								<a
									className='navbar-brand logo_h'
									href='index.html'
									style={{ color: '#76e7f1' }}
								>
									<img
										src='image/h.png'
										alt=''
										style={{ maxWidth: '20%' }}
									></img>
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
													to='/about'
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
											<li className='nav-item'>
												<NavLink
													to='/hotel'
													className='nav-link'
													activeStyle={{
														fontWeight: 'bold',
														color: '#7affbe',
													}}
												>
													<RiHotelBedLine />
													Hotel
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
