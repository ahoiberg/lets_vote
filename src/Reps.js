import React from 'react';
import ReactDOM from 'react-dom'
import {key} from './Keys.js'

export default class Reps extends React.Component {

    constructor(props) {
    super(props);
    this.state = {officials: [] }

      }
    componentDidMount() {
        var self = this;
        // var api = 'https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBaEnAj55hdPVJYW2_VVhZOS6mx60Y60i8&address='
        var first = 'https://www.googleapis.com/civicinfo/v2/representatives?key='
        var rest = '&address='
        var address = '9280 chetwood drive colorado springs co 80920' 
        var api = first + key.civic_key + rest + address
        address = address.split(' ').join('%20')              
        fetch(api)
          .then(response =>
            response.json()
          ).then(data => {
            let offices = data.offices.map((office) =>
              {return (office.name)}
              );
            offices.splice(2, 0, offices[2])
            console.log(typeof(offices))
            let representatives = data.officials.map((official) =>
              {return (official.name)}
              );
            console.log(offices)
            console.log(representatives)
            var officials = offices.map((x, y) => [x, representatives[y]])
            console.log(officials)
            this.setState({officials: officials})
          });
    }
    // need to pull out office, official separately-make key/value pairs?
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

