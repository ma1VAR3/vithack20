import React from 'react';
import NavBar from './components/navbar'
import Home from './components/screens/home'
import Help from './components/screens/help'
import Info from './components/screens/info'
import Stats from './components/screens/stats'
import Updates from './components/screens/updates'
import "./App.css"
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return(
    <BrowserRouter>
      <NavBar />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/help">
        <Help />
      </Route>
      <Route path="/info">
        <Info />
      </Route>
      <Route path="/stats">
        <Stats />
      </Route>
      <Route path="/updates">
        <Updates />
      </Route>
    </BrowserRouter>
  );
}

export default App;
