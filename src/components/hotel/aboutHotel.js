import { React, useState, useEffect } from 'react';
import './hotel.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../../_utils/hotel/hotel.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OwlCarousel from 'react-owl-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const AboutHotel = () => {
	const [hotel, setHotel] = useState(data.Hotel);
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className='p pb-5 m-t-5'>
			<div className='section_title text-center'>
				<h3
					className='title primary-text padding-title-hotel'
					data-aos='zoom-in-down'
				>
					About the hotel
				</h3>
			</div>
			{/*<OwlCarousel className='owl-theme' loop margin={10}>
				{hotel.map((img, index) => (
					<div class='item' key={index}>
						<img src={img.image} alt='' />
					</div>
				))}
			</OwlCarousel> */}
			<div
				style={{
					height: '75%',
					width: '75%',
					textAlign: 'center',
					margin: 'auto',
				}}
			>
				<Carousel autoPlay infiniteLoop dynamicHeight>
					{hotel.map((img, index) => (
						<div class='item' key={index}>
							<img src={img.image} alt='' />
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};
