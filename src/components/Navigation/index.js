import React, { PureComponent } from 'react';
import {
  Flex, Box, Text, Border
} from 'rebass';
import styled from 'styled-components';
import Link from 'react-router-dom/Link';

import { SETTINGS_PATH, FAVORITE_PATH } from '~/config';

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

const favoriteRoute = `/${FAVORITE_PATH}`;
const settingsRoute = `/${SETTINGS_PATH}`;

class Navigation extends PureComponent {
  render() {
    return (
      <Box>
        <Border border={0} borderTop={1} borderColor="darken">
          <Flex>
            <NavItem text="News Feed" to="/" />
            <NavItem text="Favoriten" to={favoriteRoute} />
            <NavItem text="Einstellungen" to={settingsRoute} />
          </Flex>
        </Border>
      </Box>
    );
  }
}

export default Navigation;
