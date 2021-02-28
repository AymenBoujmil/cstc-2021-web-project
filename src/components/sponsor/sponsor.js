import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {sponsorImage} from "../../assets/css/sponsor.css"
import data  from "../../_utils/sponsor/sponsor.json"
export const Sponsor = () => {
     const [sponsors, setSponsors] = useState(data.sponsors);


        return (
        <div>
          <section class="section-padding--small sponsor-bg">
            <div class="container">
              <div class="section-intro text-center pb-80px">
                <h2 class="primary-text">Event Plan Sponsors</h2> 
              </div>
            </div>
          </section>
          <div class="rotatingList">
            <div class="list">
                { sponsors.map((sponsor,index)=>(
                      <div class="card" key={index}>  <img src={sponsor.image} alt="" /></div>))}
                { sponsors.map((sponsor,index)=>(
                      <div class="card" key={index}>  <img src={sponsor.image} alt="" /></div>))}
                <div class="card">  <img src={sponsors[0].image} alt="" /></div>
                <div class="card">  <img src={sponsors[1].image} alt="" /></div>
            
            </div>
          <div class="list-bis">
                { sponsors.map((sponsor,index)=>(
                      <div class="card" key={index}>  <img src={sponsor.image} alt="" /></div>))}
                { sponsors.map((sponsor,index)=>(
                      <div class="card" key={index}>  <img src={sponsor.image} alt="" /></div>))}
                { sponsors.map((sponsor,index)=>(
                      <div class="card" key={index}>  <img src={sponsor.image} alt="" /></div>))}
                <div class="card">  <img src={sponsors[0].image} alt="" /></div>
                <div class="card">  <img src={sponsors[1].image} alt="" /></div>
          
          </div>
        </div>
      </div>);
    }

