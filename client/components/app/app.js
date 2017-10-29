import React, { Component } from 'react';

import CardComponent from '../card/card';
import HomeDataDecorator from '../decorator/home-data.deco';

@HomeDataDecorator
export default class App extends Component {
  state = {
    data: []
  }

  componentWillMount() {
    this.setHomeData(this.props);
  }

  /**
   * Set current page option data into the state
   * @param  {Object} props
   */
  setHomeData = (props) => {
    props.getHomeJsonData()
      .then((result) => {
        console.log(result, '1');
        this.setState({
          data: Object.keys(result).map(data => [result[data]])
        });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.state.data.map((individualHome, index) => {
          return (
            <CardComponent
              key={index}
              homeData={individualHome}
            />
          );
        })}
      </div>);
  }
}
