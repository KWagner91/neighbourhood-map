/* SOURCES
 * https://tomchentw.github.io/react-google-maps/
 * https://github.com/tomchentw/react-google-maps/issues/753
 * https://stackoverflow.com/questions/52030352/react-error-handling-fetch-data-venues-list
 */

import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import '.././index.css';

 class GoogleMaps extends Component {
	 
    state = {
      map: undefined,
      isOpen: false,
      startingZoom: 14,
      center: { lat: 48.1351, lng: 11.5820 }
    }


    mapMoved() {
      this.setState({
        center: this.state.map.getCenter()
      })
  }


  zoomChanged() {
    this.setState({
      startingZoom: this.state.map.getZoom()
    })
}

// Toggle Info Box
handleToggle = () => {
	this.setState({
		isOpen: !this.state.isOpen
	});
}

// Show Info Window when place is clicked
showInfo(a) {
	this.setState({
		showInfoIndex: a
	});
}

// Animate Marker which was clicked
animateMarker(a) {
	if (this.state.showInfoIndex === a)
	return 1
}

    
    render() {
		const places = this.props.items;
		
		const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
      onPlacesChanged = {this.mapMoved.bind(this)}
      defaultZoom = {this.state.startingZoom}
      defaultCenter = {this.state.center}
      onZoomChanged= {this.zoomChanged.bind(this)}
      >  
      {places &&
        places.map((place, i) => (
          <Marker
            key={i}
            position={{ lat: place.venue.location.lat, lng: place.venue.location.lng }}
            id={place.venue.id}
            name={place.venue.name}
            onClick={() => {this.showInfo(i)} }
			      animation = {this.animateMarker(i)}
          >
          
          
           { (this.state.showInfoIndex === i) &&
				<InfoWindow
						onClick={this.handleToggle}
						 animation={1}
						>
						<div role="presentation" aria-hidden="false">
					<h2>{place.venue.name}</h2>
					<p>{place.venue.location.address}</p>
					</div>
				</InfoWindow>
			 }
          </Marker>
        ))}

    </GoogleMap>
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
