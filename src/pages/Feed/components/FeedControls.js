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

import { actions } from '~/pages/Feed/actions';

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
            <Button type="submit">Suchen</Button>
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
