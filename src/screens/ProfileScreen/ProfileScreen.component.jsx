import React from 'react';
import './ProfileScreen.styles.scss';
import { Card, Button } from 'react-bootstrap';
import { auth } from '../../firebase';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import PlansScreen from '../PlansScreen/PlansScreen';

const ProfileScreen = () => {
    return (
        <div className = 'profile__wrapper'>
          <Card className="profile__card bg-dark text-white">
            <Card.Img src= "holder.js/100px270" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
                <PlansScreen/>
                <Button
                  onClick = {() => auth.signOut()}
                >
                  Sign Out
                </Button>
                <StripeButton/>
          </Card>
        </div>
    );
};

export default ProfileScreen;