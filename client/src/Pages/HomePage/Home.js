import React from 'react';
import HeroSection from '../HeroSection';
import MidText from '../MidText';
import { homeObjOne } from './Data';

function Home() {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <MidText />
        
        </>
    );
}

export default Home
