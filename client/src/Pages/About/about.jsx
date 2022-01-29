//Class Component
import React, { Component } from 'react';
import Intro from '../../Components/IntroText'

class about extends Component {
    state = {
        begin: {id: 1, 
            MainTitle: 'About', 
            SecondTitle: 'This page goes over what FC Coin is and what we do! This page also includes documentation and other resources.', 
            Description: 'FC Coin (Fideicommissum Coin) is a project inspired to introduce lightweight blockchain technology used by very popular coins on a web based platform.'}
      }

    render() { 
        const { begin } = this.state;

        return (
            <React.Fragment>
                <div className='about_container' style={ {marginLeft: "auto", marginRight: "auto", maxWidth: "1260px", display: "flex"} }>
                    <Intro key={begin.id} MainTitle={begin.MainTitle} SecondTitle={begin.SecondTitle} Description={begin.Description} />

                </div>
            </React.Fragment>
        );
    }
}
 
export default about;