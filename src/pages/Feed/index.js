import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';
import ScrollWrapper from '~/components/ScrollWrapper';

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isLoading, data } = this.props;
    if (isLoading) {
      return 'Loading...';
    }

    return (
      <ScrollWrapper bg="gray">
        {data.map((item, i) => <FeedItem {...item} key={i} />)}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
