import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { withTheme } from 'styled-components';
import { Box, Flex } from 'rebass';
import ArrowDown from 'react-feather/dist/icons/chevron-down';
import ArrowUp from 'react-feather/dist/icons/chevron-up';

import Select from '~/components/Select';
import Button from '~/components/Button';
import Search from '~/components/Search';
import { actions } from '~/pages/Feed/actions';

const LightButton = props => (
  <Button
    fontSize={1}
    bg="transparent"
    color="black"
    ml="auto"
    fontWeight="normal"
    css={{
      alignItems: 'center',
      display: 'flex !important',
      padding: 0
    }}
    {...props}
  />
);

class FeedControls extends PureComponent {
  state = {
    isExtended: false
  }

  onSubmit = (searchTerm) => {
    this.props.search(searchTerm);
  }

  toggleExtended = () => {
    this.setState(prevState => ({
      isExtended: !prevState.isExtended
    }));
  }

  render() {
    const {
      sortOptions,
      toggleSortDirection,
      currentSortDirection,
      currentSortOption,
      sort,
      searchTerm,
      theme
    } = this.props;
    const { isExtended } = this.state;
    const sortDirection = currentSortDirection === ':DESC' ? 'down' : 'up';
    const extendedIcon = isExtended ? <ArrowUp /> : <ArrowDown />;
    const filterOptionLabel = 'Sortieren nach';

    return (
      <Box p={2} css={{ borderBottom: `1px solid ${theme.colors.gray}` }}>
        {isExtended && (
          <Fragment>
            <Search
              onSubmit={this.onSubmit}
              defaultValue={searchTerm}
            />

            <Box>
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
          </Fragment>
        )}

        <Flex>
          <LightButton onClick={this.toggleExtended}>
            {filterOptionLabel}
            {extendedIcon}
          </LightButton>
        </Flex>
      </Box>
    );
  }
}

export default connect(
  state => state,
  actions
)(withTheme(FeedControls));
