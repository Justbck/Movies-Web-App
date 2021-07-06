import React from 'react';
import { useSelector } from 'react-redux';
import './ProfileScreen.styles.scss';
import { Card, Button } from 'react-bootstrap';
import { selectUser } from '../../redux/slices/userSlice'
import { auth } from '../../firebase';

const ProfileScreen = () => {

    const user = useSelector(selectUser);
    //convert name
    let name = user.email
    var i = name.indexOf('@');
    name = name.substring(0, i != -1 ? i : name.length);


    return (
        <div className = 'profile__wrapper'>
        <Card className="profile__card bg-dark text-white">
          <Card.Title> {name} </Card.Title>
          <Card.Text>
            Your Bio
            <br/>
            <input type = 'text'/>
          </Card.Text>
          <Card.Text>Your plan</Card.Text>
          
          {/*triggers auth logout listener from actions*/}
          <Button onClick = {() => auth.signOut()}>
            Sign Out
          </Button>
      </Card>
      </div>
    );
};

export default ProfileScreen;