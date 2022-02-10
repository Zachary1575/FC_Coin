//Class Component
import React, { Component } from 'react';
import Intro from '../../Components/IntroText';
import Mid from '../../Components/HeaderText';
import Footer from '../HomePage/Footer/Footer';

class about extends Component {
    state = {
        begin: 
        {
            id: 1, 
            MainTitle: 'About', 
            SecondTitle: 'This page goes over what FC Coin is and what we do! \n This page also includes documentation and other resources.', 
            Description: 'FC Coin (Fideicommissum Coin) is a project inspired to introduce lightweight blockchain technology used by very popular coins on a web based platform.'
        },

        midOrder:
        [
            {   
                id: 1,
                Title: 'Experiment with Fideicommissum',
                Description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Description2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Break: false  
                        
            },

            {   
                id: 2,
                Title: 'Do Something!',
                Description1:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Description2:'',
                Break: true      
            },

            {   
                id: 3,
                Title: 'Experiment with Fideicommissum',
                Description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Description2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Break: false
                        
            },

            {   
                id: 4,
                Title: 'Experiment with Fideicommissum',
                Description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Description2:``,
                Break: true  
                        
            },

            {   
                id: 5,
                Title: 'Experiment with Fideicommissum',
                Description1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Description2:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                <br /> <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                Break: false  
                        
            },

        ]
        

            
      }

    render() { 
        const { begin } = this.state;

        return (
            <React.Fragment>
                <div className='about_container' style={{marginLeft: "auto", marginRight: "auto", maxWidth: "1260px", display: "flex"}}>
                    <div className='about_inner_container' style={ {display: "flex", flexDirection: "column", flexWrap: "wrap"} }>
                        <Intro key={begin.id} MainTitle={begin.MainTitle} SecondTitle={begin.SecondTitle} Description={begin.Description} />
                        <div style={ {display: "flex", justifyContent: "center", marginBottom: "20px"}}> <hr style={ {borderBottom: "1px solid #ececec", width: "80%", marginTop: "40px"} }></hr> </div>
                        {this.state.midOrder.map(txt => <Mid key={txt.id} Title={txt.Title} Description1={txt.Description1} Description2={txt.Description2} Break={txt.Break} />)}
                    </div>

                    <div className='Side_Nav' style={{width: "80%", height: "100%", position: "relative"}}>
                        <div style={{marginLeft: "50px", backgroundColor:"#f7f7f7", width: "100%", height: "calc(100vh - 60px)"}}>
                            <h1>Yo!</h1>
                        </div>
                    </div>
                </div>


                <div style={{width: "1900px", height: "100px", background: "#20232a", marginTop: "50px"}}></div>

                <Footer />

            </React.Fragment>
        );
    }
}
 
export default about;