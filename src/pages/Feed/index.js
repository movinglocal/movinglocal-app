import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import {
  Text,
  Button,
  Select,
  Arrow,
  Input,
  Box,
  Flex
} from 'rebass';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';
import FeedControls from '~/pages/Feed/components/FeedControls';
import ScrollWrapper from '~/components/ScrollWrapper';
import styled from 'styled-components';

const FullWidthButton = styled(Button)`
  width: 100%;
`;

function renderItems(items) {
  return items.map(item => <FeedItem {...item} key={item.id} />);
}

function renderLoader() {
  return <Text textAlign="center" pt={2}>Lade Daten ...</Text>;
}

function renderButton(action) {
  return (
    <FullWidthButton onClick={action} width={1} borderRadius={0}>
      Mehr laden...
    </FullWidthButton>
  );
}

class Feed extends PureComponent {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const {
      isLoading,
      data,
      loadNextPage
    } = this.props;

    return (
      <Fragment>
        <FeedControls />
        <ScrollWrapper bg="gray">
          {isLoading ? renderLoader() : renderItems(data)}
          {!isLoading && renderButton(loadNextPage)}
        </ScrollWrapper>
      </Fragment>
    );
  }
}

export default connect(
  state => state,
  actions
)(Feed);
