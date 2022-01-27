import React from 'react';
import HeroSection from './HeroSection';
import MidText from './MidText';
import './Home.css';
import { homeObjOne } from './Data';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <MidText />

        <div className='HR-Box'>
            <hr className="ThemeBreak"></hr>
        </div>
        
        </>
    );
}

export default Home
