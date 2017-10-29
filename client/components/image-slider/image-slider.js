import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './image-slider.scss';

export class ImageSlider extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }

  displayName = 'ImageSlider';

  render() {
    console.log(this.props.images);
    return (
      <div
        className={cx(
          css.imageSliderContainer,
          'grid grid--col-16'
        )}
      >
        {this.props.images.map((image, index) => {
          return (
            <img
              key={index}
              className={css.imageSliderContainerImage}
              src={`client/assets/img/${image}.jpg`}
              alt="House home"
            />
          );
        })}
      </div>
    );
  }
}

export default (ImageSlider);
