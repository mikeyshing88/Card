import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './image-slider.scss';

export class ImageSlider extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }

  displayName = 'ImageSlider';

  state = {
    noOfImages: 0,
    slideIndex: 0
  }

  componentWillMount() {
    this.setState({ noOfImages: this.props.images.length });
  }

  nextSlide = () => {
    // Change to next image slide - unless user is on the last image
    // then change back to the initial image slide
    this.setState({
      slideIndex: (this.state.slideIndex === (this.state.noOfImages - 1))
        ? 0
        : this.state.slideIndex + 1
    });
  }


  prevSlide = () => {
    // Change to previous image slide - unless user is on the first image
    // then change back to the last image slide
    this.setState({
      slideIndex: (this.state.slideIndex === 0)
        ? this.state.noOfImages - 1
        : this.state.slideIndex - 1
    });
  }

  render() {
    return (
      <div
        className={cx(
          css.imageSliderContainer,
          'grid grid--col-16'
        )}
      >
        {this.props.images.map((image, index) => {
          return (
            <If condition={this.state.slideIndex === index}>
              <img
                key={index}
                className={css.imageSliderContainerImage}
                src={`client/assets/img/${image}.jpg`}
                alt="House home"
              />
            </If>
          );
        })}
        <div
          className={css.imageSliderContainerChevronRight}
          role="presentation"
          onClick={this.nextSlide}
          onKeyPress={this.nextSlide}
        >
          <i className="icon-chevron-right" />
        </div>
        <div
          className={css.imageSliderContainerChevronLeft}
          role="presentation"
          onClick={this.prevSlide}
          onKeyPress={this.prevSlide}
        >
          <i className="icon-chevron-left" />
        </div>
      </div>
    );
  }
}

export default (ImageSlider);
