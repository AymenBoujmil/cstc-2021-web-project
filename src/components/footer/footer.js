import React from 'react';
export const footer = () => {
	return (
		<div>
			<footer className='footer-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4  col-md-6 col-sm-6'>
							<div className='single-footer-widget'>
								<h6>About CSTC</h6>
								<p>
									The world has become so fast paced that people don’t want to
									stand by reading a page of information to be they would much
									rather look at a presentation and understand the message. It
									has come to a point where images and videos are used more to
								</p>
							</div>
						</div>
						<div className='col-lg-4 col-md-6 col-sm-6'>
							<div className='single-footer-widget'>
								<h6>Navigation Links</h6>
								<div className='row'>
									<div className='col'>
										<ul>
											<li>
												<a href='#'>Home</a>
											</li>
											<li>
												<a href='#'>Feature</a>
											</li>
											<li>
												<a href='#'>Services</a>
											</li>
											<li>
												<a href='#'>Portfolio</a>
											</li>
										</ul>
									</div>
									<div className='col'>
										<ul>
											<li>
												<a href='#'>Team</a>
											</li>
											<li>
												<a href='#'>Pricing</a>
											</li>
											<li>
												<a href='#'>Blog</a>
											</li>
											<li>
												<a href='#'>Contact</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-4  col-md-6 col-sm-6'>
							<div className='single-footer-widget mail-chimp'>
								<h6 className='mb-20'>InstaFeed</h6>
								<ul className='instafeed d-flex flex-wrap'>
									<li>
										<img
											src='https://www.facebook.com/images/fb_icon_325x325.png
                                            '
											alt='poop'
											width='50'
											height='50'
										></img>
									</li>
									<li>
										<img
											src='https://www.facebook.com/images/fb_icon_325x325.png
                                            '
											alt='poop'
											width='50'
											height='50'
										></img>
									</li>
									<li>
										<image
											src={require('../../assets/images/social_media/snap.png')}
											alt='poop'
											width='50'
											height='50'
										></image>
									</li>
									<li>
										<image
											src='../../assets/images/social_media/fb.png'
											alt=''
											width='50'
											height='50'
										></image>
									</li>
									<li>
										<image
											src='../../assets/images/social_media/fb.png'
											alt=''
											width='50'
											height='50'
										></image>
									</li>
									<li>
										<image
											src='../../assets/images/social_media/fb.png'
											alt=''
											width='50'
											height='50'
										></image>
									</li>
									<li>
										<image
											src='../../assets/images/social_media/fb.png'
											alt=''
											width='50'
											height='50'
										></image>
									</li>
									<li>
										<image
											src='../../assets/images/social media/fb.png'
											alt=''
											width='50'
											height='50'
										></image>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<div className='container'>
						<div className='row align-items-center'>
							<p className='col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left'>
								Copyright All rights{' '}
							</p>
							<div className='col-lg-4 col-sm-12 footer-social text-center text-lg-right'>
								<a href='#'>
									<i className='fab fa-facebook-f'></i>
								</a>
								<a href='#'>
									<i className='fab fa-twitter'></i>
								</a>
								<a href='#'>
									<i className='fab fa-dribbble'></i>
								</a>
								<a href='#'>
									<i className='fab fa-behance'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
