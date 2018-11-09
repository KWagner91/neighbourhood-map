import React, { Component } from 'react';
import GoogleMaps from './components/GoogleMaps';
import SideMenu from './components/SideMenu';
import Search from './components/Search';
import escapeRegExp from 'escape-string-regexp'
import './App.css';



class App extends Component {
	
	state = {
	  isLoaded: false,
	  items: [],
	  clickedCafe: {},
	  filteredItems: [],
	  query: "coffee",
	  searchWord: ""
}


// Change Keyword when loading data
	handleInputChange(query) {
	   this.setState({query})
	   this.getData()
	 }


// Filter results for user Keywords
	 userKeyword(searchWord) {
		this.setState({searchWord})
	}


   getData = () => {
    fetch("https://api.foursquare.com/v2/venues/explore?client_id=P0LWPSZEPCIPHK2CXLBTKTBGJJI03SHNTX3SHS3B50ZBUQZB&client_secret=GOUEWYEXFBRH1LWAM5TI5520GZ4UKNYA53L1GBOTT2UHRSFW&v=20180323&near=Munich&query="+ this.state.query)
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
	
	
	  componentDidMount() {
		this.getData()
	  }




	  render() {
		// SOURCE: https://github.com/markyz89/FEND-P8/blob/master/src/App.js
		let filteredRestaurants
		if(this.state.searchWord) {
		  const match = new RegExp(escapeRegExp(this.state.searchWord), 'i')
		  filteredRestaurants = this.state.filteredItems.filter((restaurant) => match.test(restaurant.venue.name))
			} 
		else {
		  filteredRestaurants = this.state.filteredItems
		}

		return (
			  <div className="flexbox">
				<header className="header">
				  <h1>Neighbourhood Map of Munich</h1>
				  <p>You happen to be in Munich, Germany? You would like to visit soon?</p>
				  <p>Enter what you would like to do in the search field to get personal recommendations: </p>
						<Search 
						items={this.state.filteredItems}
						query={this.state.query}
						handleInputChange={(query) => {this.handleInputChange(query)}}
						/>
						
				</header>
				<main className="main">
				  <div id="map" role="application">
				  <GoogleMaps 
					  items={filteredRestaurants}
					  key={filteredRestaurants.id}
					  clickedPlace={this.state.clickedPlace}
					  handleInfoWindow={this.handleInfoWindow}
					/>
				  </div>
				</main>
				
				<aside className="menu">
					<SideMenu 
						items={filteredRestaurants}
						searchWord={this.state.searchWord}
						userKeyword={(searchWord) => {this.userKeyword(searchWord)}}
					/>
				</aside>
			  </div>
		
		);
	  }
	}

export default App;
