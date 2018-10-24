import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import Link from 'react-router-dom/Link';

import MenuHeader from './MenuHeader';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  padding: 16px;

  &:hover {
    background: ${props => props.theme.colors.lightgray};
  }
`;

const Drawer = styled(Box)`
  box-shadow: ${props => (props.open ? '1px 0 6px 2px rgba(0, 0, 0, 0.1)' : 'none')};
  position: absolute;
  left:0;
  height: 100%;
  width: 300px;
  transform: translate(${props => (props.open ? '0' : '-100%')}, 0);
  transition: transform .2s;
`;

class Menu extends PureComponent {
  render() {
    return (
      <Drawer
        open={this.props.open}
        bg="white"
      >
        <MenuHeader onClose={this.props.onClose} />
        <Box>
          <StyledLink to="/">News Feed</StyledLink>
          <StyledLink to={config.IMPRINT_PATH}>Impressum</StyledLink>
          <StyledLink to={config.PRIVACY_PATH}>Datenschutz</StyledLink>
        </Box>
      </Drawer>
    );
  }
}

export default Menu;
