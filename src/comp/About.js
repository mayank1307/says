import React from 'react';
import './svg.css';
import Typo from './Typo';
import Map from './map';
import AboutMe from './aboutMe';
function About(){
    return(
        <div style={{margin:"5% 0 0 0",padding:"5%"}}>
        <Typo/>
        <AboutMe/>
        <Map/>
        </div>
    );
}
export default About;