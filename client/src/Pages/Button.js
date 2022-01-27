import React from 'react';
import './Button.css';

//Different Styles and variations of buttons stored in the array.

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'red', 'green']

//Render Button function within code

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize, 
    buttonColor}) => {

        //Checks if the buttons are valid
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

        const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

        return (
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick}
            type={type}>{children}</button>
        )
    }