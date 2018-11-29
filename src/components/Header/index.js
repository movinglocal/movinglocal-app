import React, { PureComponent, Fragment } from 'react';
import MenuIcon from 'react-feather/dist/icons/menu';
import { Box, Text, Flex, Image } from 'rebass';
import styled from 'styled-components';
import Button from '~/components/Button';

import Menu from '~/components/Menu';
import Logo from '~/../public/logo-512x512.png';

const Overlay = styled(Box)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
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

  render() {
    return (
      <Fragment>
        <Box p={3} bg="main" color="white">
          <Flex alignItems="center">
            <Button onClick={this.toggleMenu} bg="transparent" m={0} css={{ padding: 0 }}>
              <MenuIcon />
            </Button>
            <Image height={28} ml={10} src={Logo} />
            <Text ml={2} fontWeight="bold">molo.news</Text>
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

export default Header;
