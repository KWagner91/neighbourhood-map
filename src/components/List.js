import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import GoogleMaps from './GoogleMaps'


  class List extends Component {

          state = {
            error: null,
            isLoaded: false,
            items: []
        }
      
        componentDidMount() {
          fetch("https://api.foursquare.com/v2/venues/explore?client_id=P0LWPSZEPCIPHK2CXLBTKTBGJJI03SHNTX3SHS3B50ZBUQZB&client_secret=GOUEWYEXFBRH1LWAM5TI5520GZ4UKNYA53L1GBOTT2UHRSFW&v=20180323&limit=1&ll=48.1351, 11.5820&query=coffee")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result.response
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
      
        render() {
          const { error, isLoaded, items } = this.state;
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else 
          return <div>Finished...</div>;
          }
        }

  
export default List;
