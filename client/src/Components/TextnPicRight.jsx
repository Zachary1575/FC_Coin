//Class Component
import React, { Component } from 'react';
import './TextnPicRight.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


class TextnPicRight extends Component {
  state = {
    imgSrc: this.props.imgSrc,
    altSrc: this.props.altSrc,
    title: this.props.title,
    desc: this.props.desc,
    buttonPresence: this.props.buttonPresence,
    buttondesc: this.props.buttondesc,
    buttonLink:this.props.buttonLink
  }

  render() {

    //Deconstruct
    const { imgSrc, altSrc , title, desc, buttonPresence, buttondesc, buttonLink } = this.state;

    return(
      <React.Fragment>
        <div className='TextnPICr_Container'>
          <img src ={imgSrc} alt={altSrc} className='TextnPICr_IMG'></img>
          <div className='Inner'>
            <h1 className='TextnPICr_TITLE'>{title}</h1>
            <p className='TextnPICr_DESC'>{desc}</p>
            {(buttonPresence) ? <div className='btn_TextnPic'><Link to={buttonLink}><Button buttonSize='btn--wide' buttonColor='primary'>{buttondesc}</Button></Link></div> : <div/>}
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default TextnPicRight;

