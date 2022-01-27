import React from 'react'
import './MidText.css';

function MidText() {
    return (
        <>
            <div className="MidText-Container">
                <ul className="next-cont">
                    <li className="MidTexts">
                        <h1 className="Mid-header">Imaginative</h1>
                        <p className="Mid-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor. <br /> <br /> Incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </li>
                    <li className="MidTexts">
                        <h1 className="Mid-header">Proof-Of-Work</h1>
                        <p className="Mid-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br /> <br />Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </li>
                    <li className="MidTexts">
                        <h1 className="Mid-header">Mined Once, Used Everywhere</h1>
                        <p className="Mid-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. <br /> <br /> 
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MidText
