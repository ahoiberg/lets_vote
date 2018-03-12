import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
import VoterContainer from './VoterContainer'
import InputContainer from './InputContainer'
import Reps from './Reps'
import Election from './Election'
import {key} from './Keys.js'

//TODO need to update to have single point of truth of location possibly
class App extends Component {
  render() {
    return (
      <div>
        <h1> Find information about your representatives! </h1>
        <h2> Find your nearest polling location! </h2>
        < InputContainer />
        < Reps />
        < Election />
        <VoterContainer google={this.props.google} />
      </div>
    );
  }
}


export default GoogleApiWrapper({
   apiKey: key.map_key,
 })(App)

