import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
import VoterContainer from './VoterContainer'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Find information about your representatives! </h1>
        <h2> Find your nearest polling location! </h2>
        <VoterContainer google={this.props.google} />
      </div>
    );
  }
}


export default GoogleApiWrapper({
   apiKey: '',
 })(App)

