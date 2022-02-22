import React, { Component, useState } from 'react'
import { Formik, Field, Form } from 'formik';

//Import Axios
import Axios from 'axios';



class signup extends Component {


    render() { 
        return (
            <React.Fragment>
                <div>
                    <h1>Sign Up</h1>
                        <Formik initialValues={{username: '', email: '', password: '',}}

                            onSubmit={async (values) => {
                            Axios.post('http://localhost:7000/server/insert', {username: this.values.username, email: this.values.email, password: this.values.password})
                            .then(() => {alert("Queried Successfully!")}); }}>

                            <Form>
                                <label htmlFor="username">Username</label>
                                <Field id="username" name="username" placeholder="Jane" />

                                <label htmlFor="email">Email</label>
                                <Field id="email" name="email" type="email" placeholder="Doe" />

                                <label htmlFor="password">Password</label>
                                <Field id="password" name="password" placeholder="12345"/>

                                <button type="submit">Submit</button>
                            </Form>
                        </Formik>
                </div>
            </React.Fragment>
        );
    }
}
 
export default signup;