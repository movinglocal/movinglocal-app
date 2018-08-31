import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Box } from 'rebass';
import styled from 'styled-components';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';

const ScrollableBox = styled(Box)`
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

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
      <ScrollableBox flex="1 1 auto" bg="gray">
        {data.map((item, i) => <FeedItem {...item} key={i} />)}
      </ScrollableBox>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
