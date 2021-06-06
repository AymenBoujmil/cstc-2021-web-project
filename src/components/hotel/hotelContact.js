import React from 'react';
import {
	FaMapMarkerAlt,
	FaFacebook,
	FaInstagram,
	FaPhone,
} from 'react-icons/fa';
import { IoMail, IoGlobeOutline } from 'react-icons/io5';

import { IconContext } from 'react-icons';

const HotelContact = () => {
	const border0 = {
		border: '0',
	};
	return (
		<div className='container m-t-5'>
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-sm-12'>
					<div class='card hotel-card  h-90'>
						<div class='card-body'>
							<h4 class='card-title text-primary'> Hotel Contact</h4>

							<div className='contact-body'>
								<IconContext.Provider
									value={{
										size: '28px',
										color: '#367ef1',
										style: { padding: '0px 12px 4px 0 ' },
									}}
								>
									<p>
										{' '}
										<FaMapMarkerAlt />
										Route Touristique, Hammamet{' '}
									</p>
									<p>
										{' '}
										<FaFacebook />{' '}
										<a href='https://www.facebook.com/Vinccinozhabeach/'>
											{' '}
											www.facebook.com/Vinccinozhabeach/
										</a>
									</p>
									<p>
										{' '}
										<IoGlobeOutline />{' '}
										<a href='http://www.vinccihoteles.com/fre/Hotels/Tunisie'>
											www.vinccihoteles.com/fre/Hotels/Tunisie
										</a>
									</p>
									<p>
										<FaPhone /> 72 322 999
									</p>
									<p>
										<IoMail />
										kaisnachi@gmail.com{' '}
									</p>
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-12 col-12 '>
					<div className='map-responsive container'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12842.471342042267!2d10.6669708!3d36.4184405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbe6ef90979ef69e!2z2YHZhtiz2Yog2YbYstmH2Kkg2KjZitiq2LQ!5e0!3m2!1sfr!2stn!4v1622897321525!5m2!1sfr!2stn'
							width='600'
							height='450'
							style={border0}
							allowfullscreen=''
							loading='lazy'
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelContact;
