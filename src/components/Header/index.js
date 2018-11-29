import React, { PureComponent, Fragment } from 'react';
import { connect } from 'unistore/react';
import MenuIcon from 'react-feather/dist/icons/menu';
import { Box, Flex, Image } from 'rebass';
import styled from 'styled-components';

import Button from '~/components/Button';
import Menu from '~/components/Menu';
import Logo from '~/../public/logo-512x512.png';
import LogoText from '~/../public/logo-name-512x512.png';
import HeaderSearch from '~/components/HeaderSearch';
import { actions } from '~/pages/Feed/actions';


const Overlay = styled(Box)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const SearchWrapper = styled.div`
  flex-grow: 1;
  margin-left: 15px;
`;

class Header extends PureComponent {
  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  onSubmit = (searchTerm) => {
    this.props.search(searchTerm);
  }

  render() {
    const { searchTerm } = this.props;

    return (
      <Fragment>
        <Box py={2} px={3} bg="lightgray" color="black">
          <Flex alignItems="center">
            <Button onClick={this.toggleMenu} bg="transparent" color="black" m={0} css={{ padding: 0 }}>
              <MenuIcon />
            </Button>
            <Image height={40} ml={15} src={LogoText} />
            <SearchWrapper>
              <HeaderSearch
                onSubmit={this.onSubmit}
                defaultValue={searchTerm}
              />
            </SearchWrapper>
          </Flex>
        </Box>
        <Menu
          open={this.state.isMenuOpen}
          onClose={this.toggleMenu}
        />
        {this.state.isMenuOpen && <Overlay onClick={this.toggleMenu} />}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    searchTerm: state.searchTerm
  }),
  actions
)(Header);
