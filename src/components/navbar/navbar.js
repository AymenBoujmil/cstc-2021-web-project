import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../assets/css/navbar.css';
export const Navbar = () => {
	const [Shadow, setShadow] = useState(false);
	const [home, setHome] = useState(false);
	const [about, setAbout] = useState(false);
	const [speakers, setSpeakers] = useState(false);
	const [team, setTeam] = useState(false);
	const [schedule, setSchedule] = useState(false);
	const [sponsor, setSponsor] = useState(false);
	const [contact, setContact] = useState(false);
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
										<li className='nav-item active'>
											<a className='nav-link' href='index.html'>
												Home
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='about.html'>
												About
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='speaker.html'>
												Speakers
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='contact.html'>
												Schedule
											</a>
										</li>

										<li className='nav-item'>
											<a className='nav-link' href='contact.html'>
												Team
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='contact.html'>
												Sponsors
											</a>
										</li>
										<li className='nav-item'>
											<a className='nav-link' href='contact.html'>
												Contact
											</a>
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
