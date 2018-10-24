import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import NavLink from 'react-router-dom/NavLink';
import withRouter from 'react-router/withRouter';

import MenuHeader from './MenuHeader';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  border-bottom: 1px solid ${props => props.theme.colors.lightgray};
  padding: 16px;
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.bold};

  &.active,
  &:hover {
    color: ${props => props.theme.colors.main};
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
          <StyledLink exact to="/">News Feed</StyledLink>
          <StyledLink exact to={config.FAVORITE_PATH}>Favoriten</StyledLink>
          <StyledLink exact to={config.FEEDBACK_PATH}>Feedback</StyledLink>
          <StyledLink exact to={config.FILTER_PATH}>Filter</StyledLink>
          <StyledLink exact to={config.IMPRINT_PATH}>Impressum</StyledLink>
          <StyledLink exact to={config.PRIVACY_PATH}>Datenschutz</StyledLink>
        </Box>
      </Drawer>
    );
  }
}

export default withRouter(Menu);
