import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Text, Button } from 'rebass';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';
import ScrollWrapper from '~/components/ScrollWrapper';
import styled from 'styled-components';

const FullWidthButton = styled(Button)`
border-radius: 0;
width: 100%;
`;

function renderItems(items) {
  return items.map((item, i) => <FeedItem {...item} key={i} />);
}

function renderLoader() {
  return <Text textAlign="center" pt={2}>Lade Daten ...</Text>;
}

function renderButton(action) {
  return (
    <FullWidthButton onClick={action}>
      Load more...
    </FullWidthButton>
  );
}

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { isLoading, data, loadNextPage } = this.props;

    return (
      <ScrollWrapper bg="gray">
        {isLoading ? renderLoader() : renderItems(data)}
        {!isLoading && renderButton(loadNextPage)}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
