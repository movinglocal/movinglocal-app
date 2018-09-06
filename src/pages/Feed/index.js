import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Text, Button, Select, Input } from 'rebass';

import { actions } from '~/Store';
import FeedItem from '~/pages/Feed/components/FeedItem';
import ScrollWrapper from '~/components/ScrollWrapper';
import styled from 'styled-components';

const FullWidthButton = styled(Button)`
border-radius: 0;
width: 100%;
`;

const WhiteSelect = styled(Select)`
background-color: white;
`;

const WhiteInput = styled(Input)`
background-color: white;
`;

function renderItems(items) {
  return items.map((item) => <FeedItem {...item} key={item.id} />);
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
    const {
      isLoading,
      data,
      loadNextPage,
      sortOptions,
      sort,
      search
    } = this.props;

    return (
      <ScrollWrapper bg="gray">
        <WhiteInput placeholder='Suche...' onChange={search} />
        <WhiteSelect onChange={sort}>
          {sortOptions.options.map(option => <option value={option.value}> {option.label} </option>)}
        </WhiteSelect>
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
