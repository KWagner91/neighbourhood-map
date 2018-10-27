// SOURCES
// https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';


class SideMenu extends Component {
	// Prop types
	static propTypes = {
      
};


	state = {
		query: '',
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
					 ref={input => this.search = input}
					 onChange={this.handleInputChange}
				   />
				   <p>{this.state.query}</p>
			 </form>
				  
				   
			</div>
		)
		}
}



export default SideMenu


