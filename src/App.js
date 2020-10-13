import React from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';


import ContactPage from './containers/ContactPage'
import BookingsContainer from './containers/BookingsContainer'
import NavBar from './containers/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path='/contact' render={() => <ContactPage/>} />
        <Route exact path='/bookings' render={() => <BookingsContainer/>} />
      </Switch>
    </div>
  );
}

export default App;
