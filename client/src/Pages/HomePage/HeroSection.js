import React from 'react';
import { Button } from '../../Components/Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';


//Across all components, these parememters apply to all Herosection compenents, enabling certain features through a data file
export default function HeroSection({lightBg, lightTextDesc, description, buttonLabel, img, alt, imgstart}) {

    return (
        <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div className="row_home__hero-row" style={{display: 'flex', flexDirection: imgstart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img"></img>
                    <div className="col">
                        <div className="home__text__wrapper">
                            <h1 className='heading'>
                                <Typewriter 
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString("Fideicommissum.")
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString("You can rely on.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("We can rely on.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("Quod Erat Demonstrandum.")
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .typeString("Fideicommissum.")
                                    .pauseFor(2500)
                                    .start()
                                }}
                                />
                            </h1>

                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <Link to="/sign-up">
                                <Button buttonSize='btn--wide' buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}
