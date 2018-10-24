import React, { PureComponent } from 'react';
import { Flex, Box, Text } from 'rebass';
import styled from 'styled-components';
import Link from 'react-router-dom/Link';

const StyledLink = styled(Link)`
  text-decoration: none;
`;


const NavItem = ({ text, to }) => (
  <Box width={1 / 3}>
    <StyledLink to={to}>
      <Text py={3} textAlign="center" fontSize={1} color="black">
        {text}
      </Text>
    </StyledLink>
  </Box>
);

class Navigation extends PureComponent {
  render() {
    return (
      <Box css={{ borderTop: '1px solid #ddd' }}>
        <Flex>
          <NavItem text="News Feed" to="/" />
          <NavItem text="Favoriten" to={config.FAVORITE_PATH} />
          <NavItem text="Einstellungen" to={config.SETTINGS_PATH} />
        </Flex>
      </Box>
    );
  }
}

export default Navigation;
