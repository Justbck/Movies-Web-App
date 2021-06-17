import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../src/components/navbar/navbar.component';
import MainScreen from '../src/screens/MainScreen/MainScreen.component';
import Footer from './components/footer/footer.component';


function App() {

  const user = null;

  return (
    <Router>
      <Navbar/>
      <Route path = '/' component = { MainScreen } exact />
      <Footer/>
    </Router>
  );
}

export default App;
