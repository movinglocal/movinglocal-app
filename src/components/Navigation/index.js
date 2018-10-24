import React, { PureComponent } from 'react';
import { Flex, Box, Text } from 'rebass';
import styled, { withTheme } from 'styled-components';
import Link from 'react-router-dom/Link';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavItem = ({ text, to, color, noBorder }) => (
  <Box
    width={1 / 4}
    css={{
      borderRight: noBorder ? 'none' : `1px solid ${color}`,
      cursor: 'pointer',
      '&:hover': { backgroundColor: color }
    }}
  >
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
          <NavItem text="News Feed" to="/" color={this.props.theme.colors.lightgray} />
          <NavItem text="Favoriten" to={config.FAVORITE_PATH} color={this.props.theme.colors.lightgray} />
          <NavItem text="Feedback" to={config.FEEDBACK_PATH} color={this.props.theme.colors.lightgray} />
          <NavItem text="Filter" to={config.FILTER_PATH} noBorder color={this.props.theme.colors.lightgray} />
        </Flex>
      </Box>
    );
  }
}

export default withTheme(Navigation);
