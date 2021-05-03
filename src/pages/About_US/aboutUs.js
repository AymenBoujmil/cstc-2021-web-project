import React, { useState, useEffect } from 'react';
import './aboutUs.css';
import data from '../../_utils/hotel/hotel.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

import OwlCarousel from 'react-owl-carousel';

function AboutUs() {
	const [hotel, setHotel] = useState(data.Hotel);
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

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
							<h1 class='mb-2 bread'>About Us</h1>
							<p class='breadcrumbs '>
								“You only live once, but if you do it right, once is enough.” —
								Mae West
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class='ftco-section'>
				<div class='container'>
					<div class='row d-flex'>
						<div
							class='col-md-5 order-md-last wrap-about align-items-stretch'
							data-aos='fade-down-left'
						>
							<div class='wrap-about-border'>
								<div
									class='img'
									style={{ backgroundImage: 'url(/image/about.jpg)' }}
								></div>
								<div class='text'>
									<h3>Read Our Success Story for Inspiration</h3>
									<p>
										Far far away, behind the word mountains, far from the
										countries Vokalia and Consonantia, there live the blind
										texts. Separated they live in Bookmarksgrove right at the
										coast of the Semantics, a large language ocean.
									</p>
								</div>
							</div>
						</div>
						<div
							class='col-md-7 wrap-about pr-md-4 ftco-animate'
							data-aos='fade-down-right'
						>
							<h2 class='mb-4'>Welcome to Consolution</h2>
							<p>
								On her way she met a copy. The copy warned the Little Blind
								Text, that where it came from it would have been rewritten a
								thousand times and everything that was left from its origin
								would be the word.
							</p>
							<p>
								A small river named Duden flows by their place and supplies it
								with the necessary regelialia. It is a paradisematic country, in
								which roasted parts of sentences fly into your mouth.
							</p>
							<p>
								On her way she met a copy. The copy warned the Little Blind
								Text, that where it came from it would have been rewritten a
								thousand times and everything that was left from its origin
								would be the word "and" and the Little Blind Text should turn
								around and return to its own, safe country. But nothing the copy
								said could convince her and so it didn’t take long until a few
								insidious Copy Writers ambushed her, made her drunk with Longe
								and Parole and dragged her into their agency, where they abused
								her for their
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class='ftco-section ftco-counter'>
				<div class='container'>
					<div class='row justify-content-center mb-5 pb-2 d-flex'>
						<div
							class='col-md-6 align-items-stretch d-flex'
							data-aos='zoom-in-right'
						>
							<div
								class='img img-video2 d-flex align-items-center'
								style={{ backgroundImage: 'url(images/about.jpg)' }}
							>
								<div class='video2 justify-content-center'>
									<div id='video-section'>
										<div
											class='youtube-player '
											id='video-place'
											data-id='jssO8-5qmag'
										></div>
										<iframe
											width='100%'
											height='365px'
											src='https://drive.google.com/file/d/1wLQGj2u3yxKP_vOfWl1ds52pOKd9pUOL/preview'
											frameborder='0'
											allow='autoplay; encrypted-media'
											allowfullscreen
										></iframe>
									</div>
								</div>
							</div>
						</div>
						<div
							class='col-md-6 heading-section2 ftco-animate pl-lg-5 pt-md-0 pt-5'
							data-aos='zoom-in-left'
						>
							<h2 class='mb-4'>We Are the Best Consulting Agency</h2>
							<p>
								Separated they live in. A small river named Duden flows by their
								place and supplies it with the necessary regelialia. It is a
								paradisematic country. A small river named Duden flows by their
								place and supplies it with the necessary regelialia. It is a
								paradisematic country, in which roasted parts of sentences fly
								into your mouth.
							</p>
							<p>
								A small river named Duden flows by their place and supplies it
								with the necessary regelialia. It is a paradisematic country, in
								which roasted parts of sentences fly into your mouth.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				class='ftco-intro ftco-no-pb img'
				style={{ backgroundImage: 'url(/image/bg_3.jpg)' }}
			>
				<div class='container'>
					<div class='row justify-content-center mb-5'>
						<div class='col-md-10 text-center heading-section2 heading-section2-white ftco-animate'>
							<h2 class='mb-0'>You Always Get the Best Guidance</h2>
						</div>
					</div>
				</div>
			</section>

			<section class='ftco-counter' id='section-counter'>
				<div class='container'>
					<div
						class='row d-md-flex align-items-center justify-content-center'
						data-aos='fade-down-left'
					>
						<div class='wrapper'>
							<div class='row d-md-flex align-items-center'>
								<div class='col-md d-flex justify-content-center counter-wrap ftco-animate'>
									<div class='block-18'>
										<div class='text'>
											<strong class='number' data-number='705'>
												130
											</strong>
											<span>Projects Completed</span>
										</div>
									</div>
								</div>
								<div class='col-md d-flex justify-content-center counter-wrap ftco-animate'>
									<div class='block-18'>
										<div class='text'>
											<strong class='number' data-number='809'>
												202
											</strong>
											<span>Satisfied Customer</span>
										</div>
									</div>
								</div>
								<div class='col-md d-flex justify-content-center counter-wrap ftco-animate'>
									<div class='block-18'>
										<div class='text'>
											<strong class='number' data-number='335'>
												758
											</strong>
											<span>Awwards Received</span>
										</div>
									</div>
								</div>
								<div class='col-md d-flex justify-content-center counter-wrap ftco-animate'>
									<div class='block-18'>
										<div class='text'>
											<strong class='number' data-number='35'>
												678
											</strong>
											<span>Years of Experienced</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='row justify-content-center mb-5 mt-5'>
					<div
						class='col-md-8 text-center heading-section2 ftco-animate'
						data-aos='fade-down-right'
					>
						<h2 class='mt-4 mb-4'>Our Photos</h2>
						<p>
							Separated they live in. A small river named Duden flows by their
							place and supplies it with the necessary regelialia. It is a
							paradisematic country
						</p>
					</div>
					<OwlCarousel
						data-aos='zoom-in-up'
						className='owl-theme mt-5'
						loop
						margin={10}
					>
						{hotel.map((img, index) => (
							<div class='item' key={index}>
								<img src={img.image} alt='' />
							</div>
						))}
					</OwlCarousel>
				</div>
			</section>
		</div>
	);
}

export default AboutUs;
