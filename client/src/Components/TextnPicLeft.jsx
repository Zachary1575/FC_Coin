import React, { Component } from 'react';
import './TextnPicLeft.css';

class TextnPicLeft extends Component {
    state = {
      imgSrc: this.props.imgSrc,
      altSrc: this.props.altSrc,
      title: this.props.title,
      desc: this.props.desc
    }
  
    render() {
      console.log('props', this.props);
  
  
      return(
        <React.Fragment>
          <div className='TextnPICl_Container'>
            <div className='Inner'>
              <h1 className='TextnPICl_TITLE'>{this.state.title}</h1>
              <p className='TextnPICl_DESC'>{this.state.desc}</p>
            </div>
            <img src ={this.state.imgSrc} alt={this.state.altSrc} className='TextnPICl_IMG'></img>
          </div>
          
        </React.Fragment>
      );
    }
  }
  
  export default TextnPicLeft;