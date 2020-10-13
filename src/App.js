import React from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';


import ContactPage from './containers/ContactPage'
import BookingsContainer from './containers/BookingsContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import NavBar from './containers/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path='/contact' render={() => <ContactPage/>} />
        <Route exact path='/bookings' render={() => <BookingsContainer/>} />
        <Route exact path='/portfolio' render={() => <PortfolioContainer/>} />

      </Switch>
    </div>
  );
}

export default App;
