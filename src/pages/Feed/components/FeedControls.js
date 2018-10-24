import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Box, Flex } from 'rebass';
import SearchIcon from 'react-feather/dist/icons/search';
import ArrowDown from 'react-feather/dist/icons/chevron-down';
import ArrowUp from 'react-feather/dist/icons/chevron-up';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Button from '~/components/Button';
import { actions } from '~/pages/Feed/actions';

const SearchBorderRad = '30px';

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
            <Input style={{ borderRadius: `${SearchBorderRad} 0 0 ${SearchBorderRad}` }} placeholder="Suche..." name="input" defaultValue={searchTerm} />
            <Button
              width="75px"
              bg="main"
              type="submit"
              borderRadius={`0 ${SearchBorderRad} ${SearchBorderRad} 0`}
            >
              <SearchIcon />
            </Button>
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
            {sortDirection === 'down' ? <ArrowDown /> : <ArrowUp />}
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
