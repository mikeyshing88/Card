import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './price-reviews.scss';

export class Price extends Component {
  static propTypes = {
    price: PropTypes.string,
    stars: PropTypes.string
  }

  static defaultProps = {
    price: '',
    stars: ''
  }

  displayName = 'Price';

  state = {
    ratingText: '',
    ratingLength: 0
  };

  componentWillMount() {
    // Set the rating text depending on the rating
    this.setRatings(this.props);
  }

  /**
   * Set ratings
   * @param {Object} props
   */
  setRatings = (props) => {
    // Rating text corresponding the rating value
    const ratings = {
      0: 'No ratings',
      1: 'Poor',
      2: 'Standard',
      3: 'Great',
      4: 'Wonderful',
      5: 'Excellent!'
    };

    // Get the length of the ratings (future proof in case
    // more ratings are added in the future)
    const ratingsLength = Object.keys(ratings).length - 1;

    // As the rating list is defined in whole numbers,
    // round down the star rating value
    const avgStarRating = Math.floor(props.stars);

    // Set state
    this.setState({
      ratingText: ratings[avgStarRating],
      ratingLength: ratingsLength
    });
  }

  render() {
    return (
      <div className={css.priceContainer}>
        <div className={cx(css.priceContainerRating, 'font-14')}>
          {`${this.state.ratingText} ${this.props.stars}/${this.state.ratingLength}`}
        </div>
        <div className={css.priceReviewsContainerReview}>
          <h4>
            {this.props.price}
            <span className="regular font-14">
              {' avg/night'}
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

export default (Price);
