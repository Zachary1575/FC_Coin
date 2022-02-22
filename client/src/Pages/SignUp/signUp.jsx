import React, { Component, useState } from 'react'

//Using Bootstrap Temporarily
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Import Axios
import Axios from 'axios';


class signup extends Component {
    
    //Constructor for state
    constructor(props) {
        super(props)

        this.state = { 
            username: '',
            email: '',
            password: ''
         } 

    }

    //Axios, send information about registration
    submitInfo = () => {
        Axios.post('http://localhost:5000/server/insert', {username: this.state.username, email: this.state.email, password: this.state.password})
        .then(() => {alert("Queried Successfully!")});
    };


    render() { 
        return (
            <React.Fragment>
                <div className='container'>

                    <Form>
                        <Form.Group className="mb-3" controlId="formUser">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' placeholder="Enter Your Name" onChange={(e) => this.useState({username: e.target.value})} />
                            <Form.Text className="text-muted" > Format: First Name, Last Name, (no commas, just spaces); e.g John Doe</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => this.useState({email: e.target.value})}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                            <Form.Control type="password" id="inputPassword5" aria-describedby="passwordHelpBlock" onChange={(e) => this.useState({password: e.target.value})}/>
                            <Form.Text id="passwordHelpBlock" muted> Your password must be 8-20 characters long, contain letters and numbers, 
                            and must not contain spaces, special characters, or emoji. </Form.Text>
                        </Form.Group>
                        
                        </Form> 

                    <Button variant="primary" type="submit" onClick={signup.submitInfo}>Submit</Button>

            </div> 
            </React.Fragment>
        );
    }
}
 
export default signup;