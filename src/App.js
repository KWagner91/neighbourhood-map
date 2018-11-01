import React, { Component } from 'react';
import GoogleMaps from './components/GoogleMaps';
import SideMenu from './components/SideMenu';
import './App.css';



class App extends Component {
	
	state = {
	  isLoaded: false,
	  items: [],
	  clickedCafe: {},
	  filteredItems: [],
	  query: "coffee"
}


	handleInputChange(query) {
	   this.setState({query})
	   this.getData()
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
    return (
		  <div className="flexbox">
			<header className="header">
			  <h1>Neighbourhood Map of Munich</h1>
			  <p>You happen to be in Munich, Germany? You would like to visit soon?</p>
			  <p>Enter what you would like to do in the search field to get personal recommendations!</p>
			</header>
			<main className="main">
			  <div id="map" role="application">
			  <GoogleMaps 
				  items={this.state.filteredItems}
				  key={this.state.filteredItems.id}
				  clickedPlace={this.state.clickedPlace}
				  handleInfoWindow={this.handleInfoWindow}
				/>
			  </div>
			</main>
					<aside className="menu">
				<SideMenu 
					items={this.state.filteredItems}
					query={this.state.query}
					handleInputChange={(query) => {this.handleInputChange(query)}}
				/>
			</aside>
		  </div>
	
    );
  }
}

export default App;


