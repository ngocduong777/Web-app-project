import './App.css';
import Navbar from './components/Toppage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <>

    <Router>
    
      <Switch>
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Home' component={Navbar} />
      </Switch>
    </Router>
  </>

  );
}

export default App;
