import React from 'react';
import { Hotel_banner } from '../../components/hotel/hotel_banner';
import { AboutHotel } from '../../components/hotel/aboutHotel';
import HotelContact from '../../components/hotel/hotelContact';
export const Hotel = () => {
	
	return (
		<div>
			<Hotel_banner />
			<AboutHotel />
			<HotelContact />
		</div>
	);
};
