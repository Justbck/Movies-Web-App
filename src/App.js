import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../src/components/navbar/navbar.component';
import MainScreen from '../src/screens/MainScreen/MainScreen.component';
import Footer from './components/footer/footer.component';
import LoginScreen from './screens/LoginScreen/LoginScreen.component';


function App() {

  const user = null;

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
