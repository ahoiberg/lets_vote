import React from 'react';
import ReactDOM from 'react-dom'
import Geocode from "react-geocode";


export default class VoterContainer extends React.Component {


  constructor(props) {
    super(props)
    this.state = {lat: 40.7128, lng: -74.0060}  //initialization, New York, NY
  }

  //loop caused because we keep calling componentdidupdate
  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed

      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      var geocoder = new google.maps.Geocoder();

       Geocode.fromAddress("Eiffel Tower").then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(response)
          console.log(lat, lng);
          // this.setState({lat: la, lng: lo})
          // can't update above line, causes infinite loop with update
        },
        error => {
          console.error(error);
        }
      );


      var mapConfig = Object.assign({}, {
        center: {lat: this.state.lat, lng: this.state.lng}, // sets center of google map to rough middle of US
        zoom: 15, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '30vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '30vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    );
  }
}