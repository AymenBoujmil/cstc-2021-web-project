import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import '../../assets/css/navbar.css';
export const Navbar = () => {
	const [Shadow, setShadow] = useState(false);
	// const [home, setHome] = useState(false);
	// const [about, setAbout] = useState(false);
	// const [speakers, setSpeakers] = useState(false);
	// const [team, setTeam] = useState(false);
	// const [schedule, setSchedule] = useState(false);
	// const [sponsor, setSponsor] = useState(false);
	// const [contact, setContact] = useState(false);
	// const [team, setTeam] = useState(false);
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
								<a className='navbar-brand logo_h' href='index.html'>
									{/* <image src='../../assets/images/image.png' alt=''>
										{' '}
									</image> */}
									<h1>LOGO</h1>
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
									<ul className='nav navbar-nav menu_nav justify-content-end'>
										<li className='nav-item '>
											{/* <a className='nav-link' href='index.html'>
												Home
											</a> */}
											<NavLink
												to='/'
												className='nav-link'
												activeClassName='nav-active'
											>
												Home
											</NavLink>
										</li>
										<li className='nav-item'>
											<ScrollLink
												className='nav-link'
												activeClass='nav-active'
												to='about'
												spy={true}
												smooth={true}
												hashSpy={true}
												offset={0}
												duration={1000}
												isDynamic={true}
											>
												About
											</ScrollLink>
										</li>
										<li className='nav-item'>
											<ScrollLink
												className='nav-link'
												activeClass='nav-active'
												to='schedule'
												spy={true}
												smooth={true}
												hashSpy={true}
												offset={0}
												duration={1000}
												isDynamic={true}
											>
												Schedule
											</ScrollLink>
										</li>
										<li className='nav-item'>
											<ScrollLink
												className='nav-link'
												activeClass='nav-active'
												to='speakers'
												spy={true}
												smooth={true}
												hashSpy={true}
												offset={0}
												duration={1000}
												isDynamic={true}
											>
												Speakers
											</ScrollLink>
										</li>

										<li className='nav-item'>
												<ScrollLink
												className='nav-link'
												activeClass='nav-active'
												to='team'
												spy={true}
												smooth={true}
												hashSpy={true}
												offset={0}
												duration={1000}
												isDynamic={true}
												>
												Team
												</ScrollLink>
												
										
										</li>
										<li className='nav-item'>
											<ScrollLink
												className='nav-link'
												activeClass='nav-active'
												to='sponsors'
												spy={true}
												smooth={true}
												hashSpy={true}
												offset={0}
												duration={1000}
												isDynamic={true}
											>
												Sponsors
											</ScrollLink>
										</li>
										<li className='nav-item'>
											<NavLink
												to='/contact'
												className='nav-link'
												activeClassName='nav-active'
											>
												Contact
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</header>
			</div>
		</div>
	);
};
