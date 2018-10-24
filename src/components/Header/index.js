import React, { PureComponent, Fragment } from 'react';
import MenuIcon from 'react-feather/dist/icons/menu';
import { Box, Text, Flex } from 'rebass';
import Button from '~/components/Button';

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
        <Box p={3} bg="main" color="white">
          <Flex alignItems="center">
            <Button onClick={this.toggleMenu} bg="transparent" m={0} css={{ padding: 0 }}>
              <MenuIcon />
            </Button>
            <Text ml={2} fontWeight="bold">Moving Local</Text>
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
