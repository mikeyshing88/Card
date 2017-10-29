import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Price from './price';
import Reviews from './reviews';
import css from './price-reviews.scss';

export class PriceReviews extends Component {
  static propTypes = {
    price: PropTypes.string,
    rating: PropTypes.object
  }

  static defaultProps = {
    price: '',
    rating: {}
  }

  displayName = 'PriceReviews';

  render() {
    const {
      stars,
      reviews
    } = this.props.rating;

    return (
      <div className={css.priceReviewsContainer}>
        <div className={css.priceReviewsContainerPrice}>
          <Price
            price={this.props.price}
            stars={stars}
          />
        </div>
        <div className={css.priceReviewsContainerReview}>
          <Reviews
            stars={stars}
            reviews={reviews}
          />
        </div>
      </div>
    );
  }
}

export default (PriceReviews);
