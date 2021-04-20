import React, { useState,useEffect } from 'react';
import data from '../../_utils/Team/team.json';
import './Team.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
function Team() {
	const [team, setTeam] = useState(data.Team);
	useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
	return (
		<div>
			<section id='speakers' class='section speakers'>
				<div class='container'>
					<div class='section-intro section-intro-white text-center pb-98px'>
						{/* <p class='section-intro__title'>Join the event</p> */}
						<h2 class='primary-text mt-5'>Meet The Team </h2>
					</div>

					<div class='row'>
						{team.map((member) => (
							<div class='col-md-3' data-aos="zoom-in">
								<div class='team'>
									<figure>
										<img
											alt=''
											class='img-responsive center-block'
											src={member.image}
										/>
									</figure>

									<h4>{member.name}</h4>

									<p>{member.position}</p>

									<ul class='social-block'>
										<li>
											<a href={member.twitter}>
												<FaTwitter /> ||{' '}
											</a>
										</li>
										<li>
											<a href={member.facebook}>
												<FaFacebook /> ||{' '}
											</a>
										</li>
										<li>
											<a href={member.instagram}>
												<FaInstagram />{' '}
											</a>
										</li>
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Team;
