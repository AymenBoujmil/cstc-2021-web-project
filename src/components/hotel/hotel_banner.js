import React, { useEffect } from 'react';
import './hotel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Hotel_banner = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div>
			<section class='banner_part pb-5 ' data-aos='zoom-in-up'>
				<div class='container mb-5 '>
					<div class='row align-items-center'>
						<div class='col-md-5'>
							<div class='banner_text'>
								<div class='banner_text_iner '>
									<h1 className='primary-text2 '>Best hama Hotel</h1>
									<p className='banner_text_iner2'>
										As soon as you enter the building , you will be welcomed by
										the courteous hotel staff whowill make you feel at home and
										who'll go over and beyond to help make your stay enjoyable.
										You will also be stunned by every corner of the hotel. It’s
										the perfect setting for our congress with the vibrant green
										of its gardens, the pristine golden beach sand and the
										shimmering pool water. You will be able to rest comfortably
										in your spacious , hygienic and well-equipped room. And if
										you are up for a culinary adventure, nozha beach’s buffet
										restaurant offers a variety of Mediterranean dishes that’ll
										satisfy the food enthusiasts and the picky-eaters. Even In
										the midst of a pandemic, you can still enjoy your stay with
										peace of mind. For that to happen: Sanitary preventive
										measures will be applied to ensure your health. The hotel
										will only receive 50% of its maximum occupancy capacity. We
										decreased every meeting room's capacity limit by 50%.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='banner_img'>
					<img src='image/ban.jpg' alt='#' class='img-fluid'></img>
					<img
						src='image/banner_pattern.png '
						alt='#'
						class='pattern_img img-fluid'
					></img>
				</div>
			</section>
			<section className='hotel-banner mb-5'></section>
		</div>
	);
};
