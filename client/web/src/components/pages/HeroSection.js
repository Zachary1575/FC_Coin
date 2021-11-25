import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

//Across all components, these parememters apply to all Herosection compenents, enabling certain features through a data file
export default function HeroSection({lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgstart}) {
    return (
        <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            
        </div>
        
        </>
    );
}
