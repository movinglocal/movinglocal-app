import React, { PureComponent } from 'react';
import { Flex, Box, Text, Border } from 'rebass';

const NavItem = ({ text }) => (
  <Box width={1 / 3}>
    <Text py={3} textAlign="center" fontSize={1}>
      {text}
    </Text>
  </Box>
);

class Navigation extends PureComponent {
  render() {
    return (
      <Box>
        <Border border={0} borderTop={1} borderColor="darken">
          <Flex>
            <NavItem text="News Feed" />
            <NavItem text="Favoriten" />
            <NavItem text="Einstellungen" />
          </Flex>
        </Border>
      </Box>
    );
  }
}

export default Navigation;