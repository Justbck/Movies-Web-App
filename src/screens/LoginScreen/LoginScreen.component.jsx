import React, { useState } from 'react';
import './loginScreen.styles.scss';

import { Form, Button } from 'react-bootstrap';
import SignIn from '../../components/signin/SignIn.component';


function LoginScreen() {

    const [signIn, setSignIn] = useState(false);



    return (
        <div className = "loginScreen">
            <div className = "loginScreen__background">
              <div className = "loginScreen__overlay">
              </div>
              <div className = "loginScreen__navbar">
                <img 
                    className = "loginScreen__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt = "Netflix Logo"
                />
                <Button onClick = {() => setSignIn(true)} className = "loginScreen__signup">
                Sign up
                </Button>
              </div>

            {signIn ? (
              <SignIn/>
            ): 

              <Form className = "loginScreen__form">
                <input className = "loginScreen__input" placeholder = "enter your email"/>
                <Button onClick = {() => setSignIn(true)} className = "loginScreen__button"> Get started </Button>
              </Form> 
            }
            </div>
        </div>
    );
}

export default LoginScreen;