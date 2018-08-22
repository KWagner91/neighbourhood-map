import React, { Component } from 'react';
import GoogleMap from './components/GoogleMaps.js';
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
			  <h2>Menu Options</h2>
			  <p>Please choose what interests you</p>
			  <select name="Choose your interests" id="interest">
				<option value="none" default>Please Choose...</option>
				<option value="food">Restaurants</option>
				<option value="drinks">Bars</option>

			  </select>
			</aside>
			<main class="main">
			  <div id="map">
			  <GoogleMap />
			  </div>
			</main>
		  </div>
	
    );
  }
}

export default App;
