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
        var first = 'https://www.googleapis.com/civicinfo/v2/representatives?key='
        var rest = '&address='
        var address = '419 Boston Ave Medford MA 02155' 
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
            let representatives = data.officials.map((official) =>
              {return (official.name)}
              );
            console.log(offices)
            console.log(representatives)
            var officials = {} 
            //representatives are keys, offices are values
            //accounts for multiple representatives in an office (e.g. U.S. Senate)
            representatives.map((x, y) => officials[x] = offices[y])
            console.log(officials)
            console.log(typeof(officials))
            this.setState({officials: officials})
          });
    }
    render() {
        return (
          <div className="officials">
            <h2>Your elected officals are: </h2>
            <ul>
            {Object.keys(this.state.officials).map((name, index) =>
              <li> {this.state.officials[name]}: {name}</li>
              )}
            </ul>
          </div>
        );
      }
    
}

