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
      loadData,
      loadNextPage,
      sortOptions,
      toggleSortDirection,
      sort,
      search
    } = this.props;

    const sortDirection = sortOptions.current.direction === ':DESC' ? 'down' : 'up';
    return (
      <Fragment>
        <Box p={2}>
          <Flex>
            <Input placeholder="Suche..." onChange={search} />
            <Button onClick={loadData}> Suchen </Button>
          </Flex>
          <Flex pt={1}>
            <Select onChange={sort}>
              {sortOptions.options.map(option => <option value={option.value}> {option.label} </option>)}
            </Select>
            <Arrow direction={sortDirection} onClick={toggleSortDirection} m={2} mt={3} />
          </Flex>
        </Box>
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
