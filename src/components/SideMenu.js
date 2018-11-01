// SOURCES
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import '.././App.css';

class SideMenu extends Component {
	// Prop types
static propTypes = {
      query: PropTypes.string.isRequired
};

  state = {
    query: ''
  };

	render() {
		const places = this.props.items;
		
		return (
		 <div id="search">
			  <h2>Search Here For Coffee and Events</h2>
			   <form>
				   <input
					 type="text"
					 placeholder="e.g. coffee, food, museum"
					 autoFocus
					 aria-label="Locations filter"
					 value={ this.state.query }
					 onChange={(event) => {
					 this.setState({ query: event.target.value });
					 this.props.handleInputChange(event.target.value)}
          }
				   />   
			 </form>
			 
		{places &&
        places.map((place, i) => (
        <ul className="places-overview" key={i}>
			  <li id={place.venue.id}>
				  <h3>{place.venue.name} </h3>
				  <p>{place.venue.location.address} </p>
				</li>
				</ul>   
				   ))}
		</div>
		)
				
}
}


export default SideMenu


