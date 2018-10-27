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
		query: this.props.query
	}


	handleInputChange = () => {
	   this.setState({
		 query: this.search.value
	   })
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
					 ref={input => this.search = input}
					onChange={this.handleInputChange}
				   />
				   <p>{this.state.query}</p>
				   
				     {places &&
        places.map((place, i) => (
        <ul className="places-overview">
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


