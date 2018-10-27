// SOURCES
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import '.././App.css';

class SideMenu extends Component {
	// Prop types
	static propTypes = {
      
};


	state = {
		query: '',
	}



	 
	 updateSearch = (event) => {
    this.setState({query: event.target.value.substr(0, 20)});
  }

	render() {
		const places = this.props.items;
		
		return (
		 <div id="right-panel">
			  <h3>Search For Coffee</h3>
			   <form>
				   <input
					 placeholder="Search for..."
					 autoFocus
					 aria-label="Locations filter"
					 value={this.state.search}
					onChange={this.updateSearch.bind(this)}
					
			
				   />
				   
				     {places &&
        places.map((place, i) => (
        <ul className="cafe-overview">
			  <li key={place.id}>
				  <h3>{place.venue.name} </h3>
				  <p>{place.venue.location.address} </p>
				</li>
				</ul>   
				   ))}
			
		
		
				   
			 </form>
		</div>
		)
				
}
}



export default SideMenu


