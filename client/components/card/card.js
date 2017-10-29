import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './card.scss';
import ImageSlider from '../image-slider/image-slider';
import InfoContainer from '../info/info';

export class Card extends Component {
  static propTypes = {
    homeData: PropTypes.array.isRequired
  }

  displayName = 'Card';

  render() {
    const {
      title,
      features,
      price,
      rating,
      images
    } = this.props.homeData[0];

    return (
      <div className={css.cardContainer}>
        <div className={cx(css.cardContainerImage, 'grid')}>
          <ImageSlider
            images={images}
          />
        </div>
        <div className={cx(css.cardContainerInfo, 'grid')}>
          <InfoContainer
            title={title}
            features={features}
            price={price}
            rating={rating}
          />
        </div>
      </div>
    );
  }
}

export default (Card);
