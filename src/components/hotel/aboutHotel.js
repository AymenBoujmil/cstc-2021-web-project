import { React, useState } from 'react';
import './hotel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../../_utils/hotel/hotel.json';
import OwlCarousel from 'react-owl-carousel';

export const AboutHotel = () => {
	const [hotel, setHotel] = useState(data.Hotel);
	return (
		<div className='p'>
			<div className='section_title text-center'>
				<h3 className='title primary-text'>About the event</h3>
			</div>
			<OwlCarousel className='owl-theme' loop margin={10}>
				{hotel.map((img, index) => (
					<div class='item' key={index}>
						<img src={img.image} alt='' />
					</div>
				))}
			</OwlCarousel>
		</div>
	);
};
