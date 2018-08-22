// https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#the-map-container-component

import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class GoogleMap extends Component {
  render() {
	  
	  const style = {
		  width: '70%',
		  height: '70%'
	}
	  
    return (
      <Map 
      google={this.props.google} 
      style={style}
      className={'map'}
      initialCenter={{
		lat: 48.1351,
        lng: 11.5820
          }}
          zoom={14}
          onClick={this.onMapClicked}
	>
      
     
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCtYSODQt7swOobRBnXKEXA90ke2SLFHE4'
})(GoogleMap)
