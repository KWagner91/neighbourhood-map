// SOURCES
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import '.././App.css';

class SideMenu extends Component {
	// Prop types
static propTypes = {
      items: PropTypes.array.isRequired
};

  state = {
    searchWord: ''
  };
  

  


	render() {
		const places = this.props.items;
		
		return (
		 <div id="search">
			 
			 <form>
				   <input
					 type="text"
					 placeholder="filter map results"
					 autoFocus
					 aria-label="Locations filter"
					 value={ this.state.searchWord }
					 onChange={(event) => {
					 this.setState({ searchWord: event.target.value });
					 this.props.userKeyword(event.target.value)}}
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
