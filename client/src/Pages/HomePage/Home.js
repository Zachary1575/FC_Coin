import React, { Component } from 'react';
import HeroSection from './HeroSection';
import MidText from './MidText';
import PicTextR from '../../Components/TextnPicRight';
import PicTextL from '../../Components/TextnPicLeft';
import './Home.css';
import { homeObjOne } from './Data';



class Home extends Component {
    //Render the Text Component For Right Or Left
    state = {
        Order:[
            {picSideR: true, id: 1, imgSrc:'images/blogging.svg', title: 'A Loving Community', altSrc: 'IMAGE COULD NOT BE LOADED!', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {picSideR: false, id: 2, imgSrc:'images/chatbot.svg', title: 'Lightweight and Functional', altSrc: 'IMAGE COULD NOT BE LOADED!', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
            {picSideR: true,id: 3, imgSrc:'images/2.svg', title: 'Easy to use UI', altSrc: 'IMAGE COULD NOT BE LOADED!', desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
        ]
    }


    render(){

        return (
            <>
            <HeroSection {...homeObjOne} />
            <MidText />

            <div className='HR-Box'>
                <hr className="ThemeBreak"></hr>
            </div>

            <div>
                {this.state.Order.map(TextBody => (TextBody.picSideR) 
                ? <PicTextR key={TextBody.id} imgSrc={TextBody.imgSrc} title={TextBody.title} altSrc={TextBody.altSrc} desc={TextBody.desc} /> 
                : <PicTextL key={TextBody.id} imgSrc={TextBody.imgSrc} title={TextBody.title} altSrc={TextBody.altSrc} desc={TextBody.desc} />)}
            </div>
        
            </>
        );
    }
}

export default Home
