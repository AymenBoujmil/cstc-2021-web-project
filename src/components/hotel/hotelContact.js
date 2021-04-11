import React from 'react';
import {
	FaMapMarkerAlt,
	FaFacebook,
	FaInstagram,
	FaPhone,
} from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

import { IconContext } from 'react-icons';

const HotelContact = () => {
	const border0 = {
		border: '0',
	};
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-sm-12'>
					<div class='card w-100 h-90'>
						<div class='card-body'>
							<h4 class='card-title text-primary'> Hotel Name</h4>

							<div className='contact-body'>
								<IconContext.Provider
									value={{
										size: '22px',
										color: '#367ef1',
										style: { padding: '0px 12px 4px 0 ' },
									}}
								>
									<p>
										{' '}
										<FaMapMarkerAlt />
										795 Folsom Ave, Suite 600
									</p>
									<p>
										{' '}
										<FaFacebook />
										facebook.com/hotelblalalalal
									</p>
									<p>
										{' '}
										<FaInstagram /> instagram.com/hotelblalalalal
									</p>
									<p>
										<FaPhone /> P: (123) 456-7890
									</p>
									<p>
										<IoMail />
										first.last@example.com
									</p>
								</IconContext.Provider>
							</div>
						</div>
					</div>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-12 '>
					<div className='map-responsive container'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163757.39989293335!2d-118.45536669048528!3d34.077905787755945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20Californie%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2stn!4v1615055310745!5m2!1sfr!2stn'
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
