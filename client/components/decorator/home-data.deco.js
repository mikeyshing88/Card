import React from 'react';
import 'whatwg-fetch';
import { polyfill } from 'es6-promise';

// Run ES6 Promise polyfill (for IE)
polyfill();

/**
 * Private check status function for fetch usage
 * @param {number} response
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

/**
 * Fetch polyfill with HTTP status error
 * @param {string} path File path or URL
 */
export const utilFetch = (path) => {
  return fetch(path, { credentials: 'same-origin' }).then(checkStatus);
};


function HomeDataDecorator(ComposedComponent) {
  return class HomeDataClass extends React.Component {
    /**
     * Get JSON data
     * @return {Object} dataToRender
     */
    async getHomeJsonData() {
      const jsonPath = '/client/assets/data/home.json';
      let dataToRender;

      function fetchData(path) {
        return utilFetch(path).then((res) => {
          return res.json();
        }).catch((error) => {
          /* eslint no-console: 0 */
          console.error('error', error);
        });
      }

      await fetchData(jsonPath).then((res) => {
        const homeData = res;

        dataToRender = homeData;
      });

      return dataToRender;
    }

    /**
     * render
     * @return {ReactElement} markup
     */
    render() {
      return (
        <ComposedComponent
          {...this.props}
          getHomeJsonData={this.getHomeJsonData}
        />
      );
    }
  };
}

export default HomeDataDecorator;
