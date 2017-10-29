import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Features from './features/features';
import PriceReviews from './price-reviews/price-reviews';
import css from './info.scss';

export class Info extends Component {
  static propTypes = {
    title: PropTypes.string,
    features: PropTypes.object,
    price: PropTypes.string,
    rating: PropTypes.object
  }

  static defaultProps = {
    title: '',
    features: [],
    price: '',
    rating: {}
  }

  displayName = 'Info';

  componentWillMount() {
  }

  render() {
    return (
      <div className={css.infoContainer}>
        <div className={css.infoContainerTitle}>
          <div>
            <h4>{this.props.title}</h4>
          </div>
        </div>
        <div className={css.infoContainerFeatures}>
          <Features
            features={this.props.features}
          />
        </div>
        <div className={css.infoContainerPriceReviews}>
          <PriceReviews
            price={this.props.price}
            rating={this.props.rating}
          />
        </div>
      </div>
    );
  }
}

export default (Info);
