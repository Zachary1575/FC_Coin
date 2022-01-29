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
    buttondesc: this.props.buttondesc
    }
  
    render() {
  
      return(
        <React.Fragment>
          <div className='TextnPICl_Container'>
            <div className='Inner'>
              <h1 className='TextnPICl_TITLE'>{this.state.title}</h1>
              <p className='TextnPICl_DESC'>{this.state.desc}</p>
              {(this.state.buttonPresence) ? <div className='btn_TextnPic'><Link to="/sign-up"><Button buttonSize='btn--wide' buttonColor='primary'>{this.state.buttondesc}</Button></Link></div> : <div/>}
            </div>
            <img src ={this.state.imgSrc} alt={this.state.altSrc} className='TextnPICl_IMG'></img>
          </div>
          
        </React.Fragment>
      );
    }
  }
  
  export default TextnPicLeft;