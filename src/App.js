import React, { useEffect } from 'react';
import  {useDispatch} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../src/components/navbar/navbar.component';
import MainScreen from '../src/screens/MainScreen/MainScreen.component';
import Footer from './components/footer/footer.component';
import { auth } from './firebase';
import LoginScreen from './screens/LoginScreen/LoginScreen.component';
import { login, logout } from './redux/slices/userSlice';


function App() {

  //initial state
  const user = null;
  const dispatch = useDispatch();

  //Auth state change listener to user object
  useEffect(() => {
    //clean up function
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //is exist login - push user into store
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        //log out - reset user back to null
        dispatch(logout)
      }
    });
    //component is unmount  ? old listener needs to be detached
    //& new one must be attached
    return unsubscribe;
  }, []);

  return (
    <Router>
    
      {!user ? (
        <LoginScreen/>
      ) : (
      <Switch>
        <Navbar/>
        <Route path = '/' component = { MainScreen } exact />
      </Switch>
      )}
      <Footer/>
    </Router>
  );
}

export default App;
