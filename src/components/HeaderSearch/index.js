import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'unistore/react';
import { Flex } from 'rebass';
import SearchIcon from 'react-feather/dist/icons/search';
import CloseIcon from 'react-feather/dist/icons/x';


import Input from '~/components/Input';
import Button from '~/components/Button';

import { actions } from '~/components/Search/actions';

const SearchBorderRad = '30px';

const InputWrapper = styled.div`
  position: relative;
  opacity: ${props => (props.isActive ? 1 : 0)};
  flex-grow: 1;
`;

const CloseButton = styled.div`
  background: ${props => props.theme.colors.lightgray};
  padding: 2px;
  color: ${props => props.theme.colors.darkgray};
  border-radius: 50%;
  position:absolute;
  right: 5px;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

class HeaderSearch extends PureComponent {
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

  state = {
    isActive: false
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.isActive) {
      return this.setState({ isActive: true });
    }

    this.props.onSubmit(evt.target.elements.search.value);
  }

  onClose = () => {
    this.setState({ isActive: false });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ ...this.props.style }}>
        <Flex>
          <InputWrapper isActive={this.state.isActive}>
            <Input
              style={{ borderRadius: `${SearchBorderRad} 0 0 ${SearchBorderRad}`, height: '40px' }}
              placeholder={this.props.placeholder}
              name="search"
              defaultValue={this.props.defaultValue}
            />
            <CloseButton onClick={this.onClose}>
              <CloseIcon size={18} />
            </CloseButton>
          </InputWrapper>
          <Button
            width="40px"
            bg="lightgray"
            color="darkgray"
            type="submit"
            borderRadius="0 2px 2px 0"
            px={0}
          >
            <SearchIcon />
          </Button>
        </Flex>
      </form>
    );
  }
}

export default connect(() => ({}), actions)(HeaderSearch);
