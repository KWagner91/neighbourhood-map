// https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/#the-map-container-component

import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCtYSODQt7swOobRBnXKEXA90ke2SLFHE4'
})(GoogleMap)
