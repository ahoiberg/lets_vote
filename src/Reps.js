import React from 'react';
import ReactDOM from 'react-dom'

export default class Reps extends React.Component {

    constructor() {
    super();
    this.state = { data: {} };
      }
    componentDidMount() {
        var self = this;
        fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBaEnAj55hdPVJYW2_VVhZOS6mx60Y60i8&address=117%20Hillsdale%20Rd.%20Somerville%20MA')
          .then(function(response) {
            return response.json()
          }).then(function(data) {
            self.setState({ data }, () => console.log(self.state));
          });
    }
    render() {
        return (
          <div>
            {this.data}
          </div>
        );
      }
    
}

