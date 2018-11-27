import React, { PureComponent } from 'react';
import { Flex, Box } from 'rebass';
import styled, { withTheme } from 'styled-components';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router/withRouter';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 14px 0;
  text-align: center;
  font-size: 14px;
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};
  display: block;
  cursor: pointer;

  &.active, &:hover {
    color: ${props => props.theme.colors.main};
  }
`;

const NavItem = ({
  text, to, color, noBorder
}) => (
  <Box
    width={1 / 3}
    css={{
      borderRight: noBorder ? 'none' : `1px solid ${color}`,
      cursor: 'pointer'
    }}
  >
    <StyledLink exact to={to}>
      {text}
    </StyledLink>
  </Box>
);

class Navigation extends PureComponent {
  render() {
    const { lightgray, gray } = this.props.theme.colors;
    return (
      <Box css={{ borderTop: `1px solid ${gray}` }}>
        <Flex>
          <NavItem text="Meine Molos" to="/" color={lightgray} />
          <NavItem text="Später lesen" to={config.FAVORITE_PATH} color={lightgray} />
          <NavItem text="Folgen" to={config.FILTER_PATH} noBorder color={lightgray} />
        </Flex>
      </Box>
    );
  }
}

export default withRouter(withTheme(Navigation));
