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
   * Set the homes data
   * @param  {Object} props
   */
  setHomeData = (props) => {
    props.getHomeJsonData()
      .then((result) => {
        this.setState({
          data: Object.keys(result).map(data => [result[data]])
        });
      });
  }

  render() {
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
