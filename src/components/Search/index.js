import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from 'react-feather/dist/icons/search';
import { Flex, Box } from 'rebass';

import Input from '~/components/Input';
import Button from '~/components/Button';

const SearchBorderRad = '30px';

class Search extends PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string
  }

  static defaultProps = {
    onSubmit: () => {},
    placeholder: 'Suche ...',
    defaultValue: ''
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(evt.target.elements.search.value);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ ...this.props.style }}>
        <Flex>
          <Input
            style={{ borderRadius: `${SearchBorderRad} 0 0 ${SearchBorderRad}` }}
            placeholder={this.props.placeholder}
            name="search"
            defaultValue={this.props.defaultValue}
          />
          <Button
            width="75px"
            bg="lightgray"
            color="darkgray"
            type="submit"
            borderRadius={`0 ${SearchBorderRad} ${SearchBorderRad} 0`}
          >
            <SearchIcon />
          </Button>
        </Flex>
      </form>
    );
  }
}

export default Search;
