import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from "prop-types";

class SideMenu extends Component {
	// Prop types
 static propTypes = {
      
};



	render() {
		return (
		 <div id="right-panel">
			  <h3>Search Results</h3>
			  <ul id="places"></ul>
			  <button id="more">More results</button>
			</div>
		)
		}
}



export default SideMenu


