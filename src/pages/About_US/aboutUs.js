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
								“Social media is not just an activity; it is an investment of
								valuable time and resources.” <br />— Sean Gardner
							</p>
						</div>
					</div>
				</div>
			</section>

			<section
				class='ftco-section'
				style={{ overflowX: 'hidden', overflowY: 'hidden' }}
			>
				<div class='container'>
					<div class='row d-flex'>
						<div
							class='col-md-12 col-lg-5  col-12 order-md-last wrap-about align-items-stretch'
							data-aos='fade-down-left'
							style={{ overflowX: 'hidden' }}
						>
							<div class='wrap-about-border'>
								<div
									class='img'
									style={{ backgroundImage: 'url(/image/about.jpg)' }}
								></div>
								<div class='text'>
									{/* <h3>Read Our Success Story for Inspiration</h3> */}
									<p>
										The IEEE Computer Society INSAT SB has been and still is the
										most active University club since its foundation in 2015 by
										a small number of students who wanted to bring Computer
										Science closer to INSAT students. Since then, the Chapter
										grew exponentially better and larger every year, and became
										the largest CS chapter in the whole country.
									</p>
								</div>
							</div>
						</div>
						<div
							class='col-md-12 col-lg-7 col-12 wrap-about pr-md-4 ftco-animate'
							data-aos='fade-down-right'
							style={{ overflowX: 'hidden' }}
						>
							<h2 class='mb-4'>About IEEE CS chapter</h2>
							<p>
								IEEE INSAT CS Chapter offers multiple Hard Skills and Soft
								Skills training throughout the year collaborating other
								organizations and individuals. Last year, they began strong with
								the "Summer School" series of workshops in web development,
								Blockchain technologies and Bioinformatics... Throughout the
								academic year, they organized a bunch of workshops such as the
								"intro to React.js", “mobile applications development”, “problem
								solving”, the "intro to networking" and the Data science
								training event: "Data Overflow", which is an educational program
								dedicated to teaching Machine Learning from zero to hero. Not to
								mention the worthwhile entrepreneurship workshop for women in
								2018 assured by SheStarts Organization.
							</p>
							<p>
								IEEE INSAT CS Chapter also held the "IEEEXtreme" and the
								"BioIT", two 24-hour programming competitions in which
								participants solved a variety of real-world problems, the "Hour
								Of Code" in which they managed to teach schools' pupils the
								basics of coding and congresses such as the "Grand Tech" and the
								"Computer Society Tech Congress" during which they organized
								workshops with Tunisia’s most known researchers and industry
								leaders.
							</p>
							<p>
								These successes are nothing but proof that IEEE Computer Society
								Chapter INSAT SB is the trusted source for technology
								information, inspiration, and collaboration, leader of the
								technological revolution, the home of computer science.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section class='ftco-section ftco-counter'>
				<div class='container'>
					<div
						class='row justify-content-center mb-5 pb-2 d-flex'
						style={{ overflowX: 'hidden' }}
					>
						<div
							style={{ overflowX: 'hidden' }}
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
							style={{ overflowX: 'hidden' }}
						>
							<h2 class='mb-4'>About CSTC</h2>
							<p>
								CSTC, or the Computer Society Tech Congress, is a national event
								that highlights the newest technologies. It holds workshops and
								conferences about various computer science domains around a
								central theme. This year’s editions is all about “The rise of
								Social Media : our World in Data”. It is a unique opportunity to
								forge and improve both, hard and soft skills since it offers
								several workshops in Big Data, Artificial Intelligence,
								security, marketing, Data Science, etc. Besides soft skills
								trainings such as pitching, and boosting self-confidence. The
								sessions are conducted by highly qualified national and
								international experts in various domains and expertise.
							</p>
							<p>
								CSTC has also 2 competitions: one is for all participants to
								compete and win valuable prizes, and the other is for all the
								IEEE CS chapters in Tunisia to earn the Best CS chapter award,
								in collaboration with the IEEE CS Tunisia Section.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* hata hedhy */}
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
			{/* jawha behy zeda */}
			<section class='ftco-counter' id='section-counter'>
				<div class='container'>
					<div
						class='row d-md-flex align-items-center justify-content-center'
						data-aos='fade-down-left'
						style={{ overflowX: 'hidden' }}
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
				{/* jawha behy */}
				<div class='row justify-content-center mb-5 mt-5'>
					<div
						class='col-md-8 text-center heading-section2 ftco-animate'
						data-aos='fade-down-right'
						style={{ overflowX: 'hidden' }}
					>
						<h2 class='mt-4 mb-4'>Our Photos</h2>
						<p>
							Take a sneak peek to our achievements throughout the years, and
							get inspired!
						</p>
					</div>
					<OwlCarousel
						data-aos='zoom-in-up'
						style={{ overflowX: 'hidden' }}
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
