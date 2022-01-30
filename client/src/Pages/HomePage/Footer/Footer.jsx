import React, { Component } from 'react';
import './Footer.css';

class footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div>
                    <footer className='footer'>
                        <div className='footer-container'>

                            <div className='footer-box1'>
                                <h1>Find Us</h1>
                                <p>`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`</p>
                            </div>

                            <div className='footer-box2'>
                                <h1>Find Us</h1>
                                <p>`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`</p>
                            </div>

                            <div className='footer-box3'>
                                <h1>Find Us</h1>
                                <p>`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`</p>
                            </div>
                            
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        );
    }
}
 
export default footer;