import React, { Component } from 'react';
import './TextnPicRight.css';


class TextnPicRight extends Component {
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
        <div className='TextnPICr_Container'>
          <img src ={this.state.imgSrc} alt={this.state.altSrc} className='TextnPICr_IMG'></img>
          <div className='Inner'>
            <h1 className='TextnPICr_TITLE'>{this.state.title}</h1>
            <p className='TextnPICr_DESC'>{this.state.desc}</p>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default TextnPicRight;

