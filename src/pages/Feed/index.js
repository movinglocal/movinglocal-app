import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';
import ScrollWrapper from '~/components/ScrollWrapper';

function renderItems(items) {
  return items.map((item, i) => <FeedItem {...item} key={i} />);
}

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isLoading, data } = this.props;

    return (
      <ScrollWrapper bg="gray">
        {isLoading ? 'Lade Daten ...' : renderItems(data)}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
