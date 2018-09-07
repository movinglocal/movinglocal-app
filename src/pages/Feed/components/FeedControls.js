import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import {
  Button,
  Select,
  Arrow,
  Input,
  Box,
  Flex
} from 'rebass';

import { actions } from '~/Store';

class FeedControls extends PureComponent {
  onSubmit = (evt) => {
    evt.preventDefault();

    const inputValue = evt.target.elements.input.value;

    this.props.loadData(evt);
  }

  render() {
    const {
      sortOptions,
      toggleSortDirection,
      sort,
      search
    } = this.props;

    const sortDirection = sortOptions.current.direction === ':DESC' ? 'down' : 'up';
    return (
      <Box p={2}>
        <form onSubmit={this.onSubmit}>
          <Flex>
            <Input placeholder="Suche..." onChange={search} name="input" />
            <Button type="submit">Suchen</Button>
          </Flex>
        </form>
        <Flex pt={1}>
          <Select onChange={sort}>
            {sortOptions.options.map(option => <option value={option.value}> {option.label} </option>)}
          </Select>
          <Arrow direction={sortDirection} onClick={toggleSortDirection} m={2} mt={3} />
        </Flex>
      </Box>
    );
  }
}

export default connect(
  state => state,
  actions
)(FeedControls);
