import React from 'react';
import ReactDOM from 'react-dom'

export default class InputContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {address: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState = {address: event.target.address}
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Where do you live?:
          <input type="text" value={this.state.address} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}