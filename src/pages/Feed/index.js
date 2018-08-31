import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Text } from 'rebass';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';
import ScrollWrapper from '~/components/ScrollWrapper';

function renderItems(items) {
  return items.map((item, i) => <FeedItem {...item} key={i} />);
}

function renderLoader() {
  return <Text textAlign="center" pt={2}>Lade Daten ...</Text>;
}

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isLoading, data } = this.props;

    return (
      <ScrollWrapper bg="gray">
        {isLoading ? renderLoader() : renderItems(data)}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
