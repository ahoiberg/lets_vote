import React from 'react';
import ReactDOM from 'react-dom'

export default class Reps extends React.Component {

    constructor(props) {
    super(props);
    this.state = { offices: [], officials: [] }

      }
    componentDidMount() {
        var self = this;
        fetch('https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBaEnAj55hdPVJYW2_VVhZOS6mx60Y60i8&address=117%20Hillsdale%20Rd.%20Somerville%20MA')
          .then(response =>
            response.json()
          ).then(data => {
            let offices = data.offices.map((office) =>
              {return (office.name)}
              );
            let representatives = data.officials.map((official) =>
              {return (official.name)}
              );
            console.log(typeof(this))
            console.log(offices)
            console.log(representatives)
            this.setState({offices: offices})
            this.setState({officials: representatives})
          });
    }
    render() {
        return (
          <div className="officials">
            <h2>Your elected officals are: </h2>
            <ul>
            {this.state.officials.map((x) =>
              <li> {x} </li>
              )}
            </ul>
          </div>
        );
      }
    
}

