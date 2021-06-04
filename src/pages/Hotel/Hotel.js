import React from 'react';
import { Hotel_banner } from '../../components/hotel/hotel_banner';
import { AboutHotel } from '../../components/hotel/aboutHotel';
import HotelContact from '../../components/hotel/hotelContact';
export const Hotel = () => {
	return (
		<div>
			<section
				class='hero-wrap hero-wrap-2'
				style={{ backgroundImage: 'url(/image/bg_1.jpg)' }}
			>
				<div class='overlay'></div>
				<div class='container'>
					<div class='row m-50 no-gutters slider-text-about align-items-center justify-content-center'>
						<div class='col-md-9 ftco-animate text-center'>
							<h1 class='mb-2 bread'>Hotel</h1>
							<p class='breadcrumbs'>
								On the coastline of Hammamet lies vincci NOZHA beach. A
								four-star hotel that will accommodate the CSTC's guests and will
								exceed their expectations.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Hotel_banner />
			<AboutHotel />
			<HotelContact />
		</div>
	);
};
