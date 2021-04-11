import React from 'react';
import './hotel.css';

export const Hotel_banner = () => {
	return (
		<div>
			<section class='banner_part'>
				<div class='container'>
					<div class='row align-items-center'>
						<div class='col-md-5'>
							<div class='banner_text'>
								<div class='banner_text_iner '>
									<h1 className='primary-text2'>Best quality pillow</h1>
									<p>
										Seamlessly empower fully researched growth strategies and
										interoperable internal Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Modi, mollitia. Quod, facere
										sapiente? Nam a voluptatem dolorum quidem explicabo delectus
										odit mollitia, quas aut doloremque at eos enim ad rerum.
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
			<section className='hotel-banner'></section>
		</div>
	);
};
