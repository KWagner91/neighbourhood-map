import React, { Component } from 'react';
import GoogleMaps from './components/GoogleMaps.js';
import SideMenu from './components/SideMenu.js';
import './App.css';
//import './responsive.css';


class App extends Component {
	
	state = {
  isLoaded: false,
  items: [],
  clickedCafe: {},
  filteredItems: []
}
	
	 componentDidMount() {
    fetch("https://api.foursquare.com/v2/venues/explore?client_id=P0LWPSZEPCIPHK2CXLBTKTBGJJI03SHNTX3SHS3B50ZBUQZB&client_secret=GOUEWYEXFBRH1LWAM5TI5520GZ4UKNYA53L1GBOTT2UHRSFW&v=20180323&near=Munich&query=food")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.response.groups[0].items,
            filteredItems: result.response.groups[0].items
          });          
        }
      )
        .catch(error => {
          alert(
            "An error occurred while trying to fetch data from Foursquare: " +
              error
          );
        });
      
  }
	
  render() {
    return (
		  <div class="flexbox">
			<header class="header">
			  <h1>Neighbourhood Map of Munich</h1>
			  <p>You happen to be in Munich, Germany? You would like to visit soon?</p>
			</header>
			<aside class="menu">
				<SideMenu />
			</aside>
			<main class="main">
			  <div id="map">
			  <GoogleMaps 
          items={this.state.filteredItems}
          clickedPlace={this.state.clickedPlace}
          handleInfoWindow={this.handleInfoWindow}
        />
			  </div>
			</main>
		  </div>
	
    );
  }
}

export default App;


