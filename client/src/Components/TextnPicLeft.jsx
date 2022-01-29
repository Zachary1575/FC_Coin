//Class Component
import React, { Component } from 'react';
import './TextnPicLeft.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

class TextnPicLeft extends Component {
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

      const { imgSrc, altSrc , title, desc, buttonPresence, buttondesc, buttonLink } = this.state;
  
      return(
        <React.Fragment>
          <div className='TextnPICl_Container'>
            <div className='Inner'>
              <h1 className='TextnPICl_TITLE'>{title}</h1>
              <p className='TextnPICl_DESC'>{desc}</p>
              {(buttonPresence) ? <div className='btn_TextnPic'><Link to={buttonLink}><Button buttonSize='btn--wide' buttonColor='primary'>{buttondesc}</Button></Link></div> : <div/>}
            </div>
            <img src ={imgSrc} alt={altSrc} className='TextnPICl_IMG'></img>
          </div>
          
        </React.Fragment>
      );
    }
  }
  
  export default TextnPicLeft;