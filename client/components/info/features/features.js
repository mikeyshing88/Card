import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './features.scss';

export class Features extends Component {
  static propTypes = {
    features: PropTypes.object.isRequired
  }

  displayName = 'Features';

  render() {
    return (
      <div className={css.featuresContainer}>
        <div className={css.featuresContainerSleeps}>
          <h5 className={css.featuresContainerTitle}>
            Sleeps
          </h5>
          <h4 className={css.featuresContainerAmount}>
            {this.props.features.noOfPeople}
          </h4>
        </div>
        <div className={css.featuresContainerBedrooms}>
          <h5 className={css.featuresContainerTitle}>
            Bedrooms
          </h5>
          <h4 className={css.featuresContainerAmount}>
            {this.props.features.bedrooms}
          </h4>
        </div>
        <div className={css.featuresContainerBathrooms}>
          <h5 className={css.featuresContainerTitle}>
            Bathrooms
          </h5>
          <h4 className={css.featuresContainerAmount}>
            {this.props.features.bathrooms}
          </h4>
        </div>
      </div>
    );
  }
}

export default (Features);
