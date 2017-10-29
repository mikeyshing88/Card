import React from 'react';
import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

export const utilFetch = (path) => {
  return fetch(path, { credentials: 'same-origin' }).then(checkStatus);
};

function HomeDataDecorator(ComposedComponent) {
  return class HomeDataClass extends React.Component {
    /**
     * Get JSON data
     * @param  {String, string} variant, packageId
     * @return {Object} optionsToRender
     */
    async getHomeJsonData() {
      const jsonPath = '/client/assets/data/home.json';
      let dataToRender;

      console.log(jsonPath);

      function fetchData(path) {
        return utilFetch(path).then((res) => {
          return res.json();
        }).catch((error) => {
          /* eslint no-console: 0 */
          console.error('error', error);
        });
      }

      await fetchData(jsonPath).then((res) => {
        console.log(res);
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
