import React, { PureComponent, Fragment } from 'react';
import MenuIcon from 'react-feather/dist/icons/menu';
import {
  Box, Text, Flex, Drawer, Relative, Absolute, Close
} from 'rebass';

import Menu from '~/components/Menu';

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
        <Box p={3} bg="blue" color="white">
          <Flex alignItems="center">
            <MenuIcon onClick={this.toggleMenu} />
            <Text ml={2}>Moving Local</Text>
          </Flex>
        </Box>
        <Menu
          open={this.state.isMenuOpen}
          onClose={this.toggleMenu}
        />
      </Fragment>
    );
  }
}

export default Header;
