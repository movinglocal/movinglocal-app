import React, { PureComponent } from 'react';
import { Box, Text } from 'rebass';

class Header extends PureComponent {
  render() {
    return (
      <Box p={3} bg="blue" color="white">
        <Text>Moving Local</Text>
      </Box>
    );
  }
}

export default Header;
