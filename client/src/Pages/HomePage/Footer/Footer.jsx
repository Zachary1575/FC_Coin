import React, { Component } from 'react';
import './Footer.css';
import footerImage from '../../../Assets/Footer_img.png'

class footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div>
                    <footer className='footer'>
                        <div className='footer-container'>

                            <div>
                                <img style={{height: "75%", marginLeft: "50px"}} src={footerImage} alt='CANNOT BE LOADED!'></img>
                            </div>

                            <div className='footer-box1'>
                                <div className='header'>
                                    <h1 className='footer_h'>Find Us</h1>
                                </div>
                                <p className='footer_txt'>`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`</p>
                            </div>

                            <div className='footer-box2'>
                                <div className='header'>
                                    <h1 className='footer_h'>Quick Links</h1>
                                </div>
                                
                                <ul className='Quick_Links'>
                                    <li className='link'>Link 1</li>
                                    <li className='link'>Link 2</li>
                                    <li className='link'>Link 3</li>
                                    <li className='link'>Link 4</li>
                                    <li className='link'>Link 5</li>
                                </ul>
                            </div>

                            <div className='footer-box3'>
                                <div className='header'>
                                    <h1 className='footer_h'>Follow Us</h1>
                                </div>

                                <ul className='Quick_Links'>
                                <p className='footer_txt'>`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`</p>
                                    <li className='link'>Link 1</li>
                                    <p className='footer_txt'>`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`</p>
                                    <li className='link'>Link 2</li>
                                    <p className='footer_txt'>`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`</p>
                                    <li className='link'>Link 3</li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>

                <div className='End'>
                <div className='footer_end'>
                    <ul className='footer_link_end'>
                        <li className='footer_end_li'>Home</li>
                        <li className='footer_end_li'>Community</li>
                        <li className='footer_end_li'>About</li>
                        <li className='footer_end_li'>Login</li>
                        <li className='footer_end_li'>Sign-Up</li>
                        <li className='footer_end_li'>Github</li>
                    </ul>
                    <p className='footer_end_text'>Copyright @2021 | Designed by Zachary1575</p> 
                    <ul className='footer_socials_end'>
                    <li className='footer_end_s'>LINK</li>
                    <li className='footer_end_s'>LINK</li>
                    <li className='footer_end_s'>LINK</li>
                    <li className='footer_end_s'>LINK</li>
                    </ul>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default footer;