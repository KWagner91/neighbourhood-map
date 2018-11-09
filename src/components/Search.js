// SOURCES
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import PropTypes from 'prop-types';
import '.././App.css';

class Search extends Component {
	// Prop types
	static propTypes = {
		query: PropTypes.string.isRequired
	};

	state = {
		query: ''
	};
  

	render() {
		return (
		<div id="query-search">
			<input
				type="text"
				placeholder="e.g. coffee, food, museum"
				autoFocus
				aria-label="Locations filter"
				value={ this.state.query }
				onChange={(event) => {
					this.setState({ query: event.target.value });
					this.props.handleInputChange(event.target.value)}}
				   />   
			 
		</div>
		)		 
	}
}


export default Search
