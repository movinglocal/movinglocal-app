import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import { withTheme } from 'styled-components';
import { Box, Flex } from 'rebass';
import SearchIcon from 'react-feather/dist/icons/search';
import ArrowDown from 'react-feather/dist/icons/chevron-down';
import ArrowUp from 'react-feather/dist/icons/chevron-up';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Button from '~/components/Button';
import { actions } from '~/pages/Feed/actions';

const SearchBorderRad = '30px';

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

  onSubmit = (evt) => {
    evt.preventDefault();

    const searchTerm = evt.target.elements.input.value;
    this.props.search(searchTerm);
    this.props.initData();
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
    const extendedLabel = isExtended ? 'ausblenden' : 'anzeigen';
    const extendedIcon = isExtended ? <ArrowUp /> : <ArrowDown />;

    return (
      <Box p={2} css={{ borderBottom: `1px solid ${theme.colors.gray}` }}>
        {isExtended && (
          <Fragment>
            <form onSubmit={this.onSubmit}>
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
            Filteroptionen {extendedLabel} {extendedIcon}
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
