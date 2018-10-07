import React, { Component } from 'react';
import GoogleMaps from './components/GoogleMaps.js';
import SideMenu from './components/SideMenu.js';
import './App.css';
//import './responsive.css';


class App extends Component {
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
				 containerElement = {<div style = {{ height: `80vh` }} />}
				 mapElement = {<div style = {{ height: `100%` }} />}
				/>
				<SideMenu />
			  </div>
			</main>
		  </div>
	
    );
  }
}

export default App;


