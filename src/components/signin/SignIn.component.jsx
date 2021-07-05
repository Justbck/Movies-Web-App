import React, { useRef } from 'react';
import './signin.styles.scss'
import { auth } from '../../firebase';

import {Form, Button} from 'react-bootstrap';

function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
                alert(error.message)
        });
    };

    const login = (e) => {
        e.preventDefault();
    }

    return (
        <div className = "signinScreen">
            <Form>
                <h2>Sign In</h2>
                <input ref = {emailRef} placeholder = "Email" type = "email"/>
                <input ref = {passwordRef} placeholder = "Password" type = "password"/>
                <Button type = "submit" onClick = {login}> Sign in</Button>
                <h4 className = "signup__text">New? <span className = "signup__grey" onClick = {register}>Sign up now</span></h4>
            </Form>
        </div>
    );
};

export default SignIn;