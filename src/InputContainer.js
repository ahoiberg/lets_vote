import React from 'react';
import ReactDOM from 'react-dom'

export default class InputContainer extends React.Component {
    constructor(){
        super();
        this.location = {address: '', city: '', state: '', zip: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState = {[event.target.name]: event.target.value}
    }

    handleSubmit(event) {
        event.preventDefault();
    }
//todo can't actually type in input...
    render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h2> Where do you live?: </h2>
        <label>
          address:
          <input type="text" name="address" value={this.location.address} onChange={this.handleChange} />
        </label>
        <label>
          city:
          <input type="text" name="city" value={this.location.city} onChange={this.handleChange} />
        </label>
        <label>
          state:
          <input type="text" name="state" value={this.location.state} onChange={this.handleChange} />
        </label>
        <label>
          zip:
          <input type="text" name="zip" value={this.location.zip} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}