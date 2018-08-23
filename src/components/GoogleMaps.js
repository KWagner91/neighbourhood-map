// https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#the-map-container-component
// https://www.npmjs.com/package/google-maps-react

import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from "prop-types";
 
export class GoogleMap extends Component {
	
	static propTypes = {
	  onMapClicked: PropTypes.func.isRequired,
	  onMarkerClick: PropTypes.func.isRequired
}
	
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
  };
	
	 onMarkerClick = (props, marker, e) => {
		this.setState({
		  selectedPlace: props,
		  activeMarker: marker,
		  showingInfoWindow: true
    });
}
 
	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
		  this.setState({
			showingInfoWindow: false,
			activeMarker: null
      })
    }
  };
  
  fetchPlaces(mapProps, map) {
  const {google} = mapProps;
  const service = new google.maps.places.PlacesService(map);
}
	
  render() {
	  
	  const style = {
		  width: '70%',
		  height: '70%'
	}
	  
    return (
      <Map 
		google={this.props.google}
		onReady= {this.props.fetchPlaces}
		style={style}
      
     
      initialCenter={{
		lat: 48.1351,
        lng: 11.5820
          }}
          zoom={14}
         onClick={this.onMapClicked}
	>


      
      <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={this.props.google.maps.LatLng()} />
                
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <p>{this.state.selectedPlace.position}</p>
            </div>
        </InfoWindow>
 
      </Map>
      
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCtYSODQt7swOobRBnXKEXA90ke2SLFHE4'
})(GoogleMap)
