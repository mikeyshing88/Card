import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './price-reviews.scss';

export class Price extends Component {
  static propTypes = {
    reviews: PropTypes.array
  }

  static defaultProps = {
    reviews: []
  }

  displayName = 'Price';

  state = {
    plusRating: 0,
    negRating: 0,
    reviewsLength: 0
  }

  componentWillMount() {
    // Set the star rating
    this.setStarRating(this.props);
  }

  setStarRating = (props) => {
    // Get the number of reviews
    const reviewLength = Object.keys(this.props.reviews).length;
    // Generate how many positive stars
    const postiveStarRating = Math.floor(props.stars);
    // Generate how many negative stars
    const negativeStarRating = 5 - postiveStarRating;

    this.setState({
      plusRating: postiveStarRating,
      negRating: negativeStarRating,
      reviewsLength: reviewLength
    });
  }

  render() {
    return (
      <div className={css.reviewsContainer}>
        <div className={css.reviewsContainerStars}>
          {[...Array(this.state.plusRating)].map((starNumber, index) => {
            return (
              <i key={index} className="icon-star positive" />
            );
          })}
          {[...Array(this.state.negRating)].map((starNumber, index) => {
            return (
              <i key={index} className="icon-star negative" />
            );
          })}
        </div>
        <div className={css.reviewsContainerReview}>
          <h5>{`${this.state.reviewsLength} reviews`}</h5>
        </div>
      </div>
    );
  }
}

export default (Price);
