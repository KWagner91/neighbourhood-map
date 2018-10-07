/* SOURCES
 * https://tomchentw.github.io/react-google-maps/
 * https://github.com/tomchentw/react-google-maps/issues/753
 */

import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

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
  
      const markers = this.props.markers || [];
      
      return (
        <GoogleMap
        onIdle = {this.mapMoved.bind(this)}
        defaultZoom = {this.state.startingZoom}
        defaultCenter = {this.state.startingCenter}
        ref = {this.mapLoaded.bind(this)}
        onZoomChanged= {this.zoomChanged.bind(this)}
        >

        <Marker
          position={this.state.startingCenter}
          onClick={() => this.handleToggleOpen()}
        >

        {
			this.state.isOpen &&
       <InfoWindow
						onCloseClick={this.handleToggleClose}
				>
					<span>Something</span>
				</InfoWindow>
        }
        </Marker>   
      </GoogleMap>

     
            );
        }}

  
export default withGoogleMap(GoogleMaps);
