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
    filter: '',
    filteredResults: []
  };
  

filterResults = (itemFilter) => {
    let filteredResults = this.state.filteredResults
    filteredResults = filteredResults.filter((item) => {
      return item.indexOf(
        itemFilter.toLowerCase()) !== -1
    })
    this.setState({
      filteredResults
    })
}

	render() {
		const places = this.props.items;
		
		return (
		 <div id="search">
			 
			 <form>
				   <input
					 type="text"
					 placeholder="filter results"
					 autoFocus
					 aria-label="Locations filter"
					 value={ this.state.filter }
					 onChange={(event) => {
					 this.setState({ filter: event.target.value });
				 }}
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


