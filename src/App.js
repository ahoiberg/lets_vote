import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
import VoterContainer from './VoterContainer'
import InputContainer from './InputContainer'
import Reps from './Reps'
//TODO need to update to have single point of truth of location possibly
class App extends Component {
  render() {
    return (
      <div>
        <h1> Find information about your representatives! </h1>
        <h2> Find your nearest polling location! </h2>
        < InputContainer />
        < Reps />
        <VoterContainer google={this.props.google} />
      </div>
    );
  }
}


export default GoogleApiWrapper({
   apiKey: 'AIzaSyAagC4cVDd1QZ0kd3-H_lT5eZyO1Ml4GJ4',
 })(App)

