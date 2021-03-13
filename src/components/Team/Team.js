import React,{useState} from 'react';
import './Team.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import data from '../../_utils/Team/team.json';
export const Team = () => {
	const [team, setTeam] = useState(data.Team);
	return ( <div id='team'>
					<section class='section-padding--small sponsor-bg'>
				<div class='container'>
					<div class='section-intro text-center '>
						<h2 class='primary-text'>Team</h2>
					</div>
				</div>
			</section>
      			   <OwlCarousel className='owl-theme' loop margin={10} >
  				{team.map((person,index)=>( <div class='item' key={index}>
   			     <img src={person.image} alt={person.name}/>
					<div className='text text-center py-3'>
							<h5>{person.name}</h5>
					<h6>{person.position}</h6>
					</div>
				
   				 </div>))}
 			  
			</OwlCarousel>
 		   </div>
            
	);
};