import React, { PureComponent } from 'react';
import { Flex, Box, Text } from 'rebass';

const NavItem = ({ title }) => (
  <Box width={1 / 3}>
    <Text py={3} textAlign="center" fontSize={1}>
      {title}
    </Text>
  </Box>
);

class Navigation extends PureComponent {
  render() {
    return (
      <Box>
        <Flex>
          <NavItem title="News Feed" />
          <NavItem title="Favoriten" />
          <NavItem title="Einstellungen" />
        </Flex>
      </Box>
    );
  }
}

export default Navigation;