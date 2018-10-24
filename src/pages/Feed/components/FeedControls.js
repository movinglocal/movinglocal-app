import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import styled from 'styled-components';
import {
  Button,
  Box,
  Flex
} from 'rebass';

import { actions } from '~/pages/Feed/actions';

const Input = styled.input`
  width: 100%;
  border: 0;
  border-color: #eee;
  box-shadow: inset 0 0 0 1px #eee;
  border-radius: 4px;
  margin: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
  border: 0;
`;

const Select = styled.select`
  margin: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  border: 0;
  border-color: #eee;
  box-shadow: inset 0 0 0 1px #eee;
  border-radius: 4px;
  border: 0;
  background: white;
`;

class FeedControls extends PureComponent {
  onSubmit(evt) {
    evt.preventDefault();
    const searchTerm = evt.target.elements.input.value;
    this.props.search(searchTerm);
    this.props.initData();
  }

  render() {
    const {
      sortOptions,
      toggleSortDirection,
      currentSortDirection,
      currentSortOption,
      sort,
      searchTerm
    } = this.props;

    const sortDirection = currentSortDirection === ':DESC' ? 'down' : 'up';

    return (
      <Box p={2}>
        <form onSubmit={() => this.onSubmit()}>
          <Flex>
            <Input placeholder="Suche..." name="input" defaultValue={searchTerm} />
            <Button bg="main" type="submit" borderRadius={0}>Suchen</Button>
          </Flex>
        </form>
        <Flex pt={1}>
          <Select onChange={sort} value={currentSortOption}>
            {sortOptions.map(option => (
              <option value={option.value} key={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Box css={{ cursor: 'pointer' }} onClick={toggleSortDirection} m={2} mt={3}>
            {sortDirection === 'down' ? '↓' : '↑'}
          </Box>
        </Flex>
      </Box>
    );
  }
}

export default connect(
  state => state,
  actions
)(FeedControls);
