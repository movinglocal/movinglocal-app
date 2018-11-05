import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import 'intersection-observer';

class IntersectionObserverWrapper extends PureComponent {
  static propTypes = {
    threshold: PropTypes.number,
    onEnter: PropTypes.func
  }

  static defaultProps = {
    threshold: 1,
    onEnter: () => {}
  }

  componentDidMount() {
    this.initObserver();
  }

  initObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.props.threshold
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );

    this.observer.observe(this.wrapper);
  }

  handleObserver(entries) {
    const entry = entries[0];

    if (entry.intersectionRatio >= this.props.threshold) {
      this.props.onEnter();
    }
  }

  render() {
    return (
      <div ref={(ref) => { this.wrapper = ref; }}>
        {this.props.children}
      </div>
    );
  }
}

export default IntersectionObserverWrapper;
