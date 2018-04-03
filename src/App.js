import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
import VoterContainer from './VoterContainer'
import Reps from './Reps'
import Election from './Election'
import {key} from './Keys.js'

class App extends Component {

  constructor(){
        super();
        this.state = {address: '', city: '', st: '', zip: ''};
      this.handleAddressChange = this.handleAddressChange.bind(this)
      this.handleCityChange = this.handleCityChange.bind(this)
      this.handleStChange = this.handleStChange.bind(this)
      this.handleZipChange = this.handleZipChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAddressChange(event) {
      this.setState({address: event.target.value})
    }
    handleCityChange(event){
      this.setState({city: event.target.value})
    }
    handleStChange(event){
      this.setState({st: event.target.value})
    }

    handleZipChange(event){
      this.setState({zip: event.target.value})
    }

    handleSubmit(event) {
      //  state just isn't permanently changed on submit when the request is submitted
         console.log(this.state)
         event.preventDefault();
     }

  render() {
    return (
      <div>
      <h1> Find information about your representatives! </h1>
        <h2> Find your nearest polling location! </h2>
      <form>
      <h2> Where do you live?: </h2>
        <label>
          address:
          <input type="text" name="address" onChange={this.handleAddressChange} />
        </label>
        <label>
          city:
          <input type="text" name="city" onChange={this.handleCityChange} />
        </label>
        <label>
          state:
          <input type="text" name="state" onChange={this.handleStChange} />
        </label>
        <label>
          zip:
          <input type="text" name="zip" onChange={this.handleZipChange} />
        </label>
        <input type="submit" value="Submit" />
        <h3>Showing information for this address: </h3>
        {this.state.address} {this.state.city} {this.state.st} {this.state.zip}

      </form>
        < Reps />
        < Election address={this.state} />
        <VoterContainer google={this.props.google} />
      </div>
    );
  }
}


export default GoogleApiWrapper({
   apiKey: key.map_key,
 })(App)

