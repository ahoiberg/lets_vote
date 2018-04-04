import React, { Component } from 'react';
import './App.css';
import { GoogleApiWrapper } from 'google-maps-react'
import VoterContainer from './VoterContainer'
import Reps from './Reps'
import Election from './Election'
import {key} from './Keys.js'

export default class App extends Component {

  constructor(){
        super();
        this.state = {locationInfo: {
                        address: '1600 Pennsylvania Ave', 
                        city: 'Washington', 
                        st: 'DC', 
                        zip: '20500'} };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
     handleChange(event) {
        event.preventDefault();
        let formValues = this.state.locationInfo;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        return this.setState({formValues})
    }

    handleSubmit(event) {
        event.preventDefault();
        let formValues = this.state.locationInfo;
        console.log(formValues);
        this.setState({formValues})
    }

  render() {
    return (
      <div>
      <h1> Find information about your representatives! </h1>
        <h2> Find your nearest polling location! </h2>
      <form onSubmit={this.handleSubmit}>
      <h2> Where do you live?: </h2>
        <label>
          address:
          <input type="text" name="address" value={this.state.locationInfo["address"]} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          city:
          <input type="text" name="city" value={this.state.locationInfo["city"]} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          state:
          <input type="text" name="state" value={this.state.locationInfo["st"]} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          zip:
          <input type="text" name="zip" value={this.state.locationInfo["zip"]} onChange={this.handleChange.bind(this)} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.address} {this.state.city} {this.state.st} {this.state.zip}

      </form>
        < Reps address={this.state.locationInfo}/>
        < Election address={this.state.locationInfo} />
      </div>
    );
  }
}

// need to figure out how to call components again-state is updated but not passed to 
//children

// export default GoogleApiWrapper({
//    apiKey: key.map_key,
//  })(App)

