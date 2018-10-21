/* SOURCES
 * https://tomchentw.github.io/react-google-maps/
 * https://github.com/tomchentw/react-google-maps/issues/753
 * https://stackoverflow.com/questions/52030352/react-error-handling-fetch-data-venues-list
 */

import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

  class GoogleMaps extends Component {
    state = {
      map: undefined,
      isOpen: false,
      startingZoom: 14,
      startingCenter: { lat: 48.1351, lng: 11.5820 }
    }


    mapMoved() {
      console.log('mapMoved: ' + JSON.stringify(this.state.map.getCenter()))
  }

    mapLoaded(ref) {
      this.state.map = ref;
  }

  zoomChanged() {
    console.log(this.state.map.getZoom())
}

handleToggleOpen = () => {
	this.setState({
		isOpen: true
	});
}

handleToggleClose = () => {
	this.setState({
		isOpen: false
	});
}


    
    render() {
		const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
      onIdle = {this.mapMoved.bind(this)}
      defaultZoom = {this.state.startingZoom}
      defaultCenter = {this.state.startingCenter}
      ref = {this.mapLoaded.bind(this)}
      onZoomChanged= {this.zoomChanged.bind(this)}
      / >  
        ))

   
      return (
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtYSODQt7swOobRBnXKEXA90ke2SLFHE4&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

     
            );
        }}

  
export default GoogleMaps;
