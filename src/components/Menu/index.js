import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  Text, Drawer, Relative, Absolute, Close
} from 'rebass';

const StyledDrawer = styled(Drawer)`
  box-shadow: ${props => (props.open ? '1px 0 6px 2px rgba(0, 0, 0, 0.1)' : 'none')};
`;

class Menu extends PureComponent {
  render() {
    return (
      <StyledDrawer
        open={this.props.open}
        side="left"
        p={3}
        bg="white"
        color="black"
      >
        <Relative>
          <Absolute right={5} top={0}>
            <Close px={0} py={0} onClick={this.props.onClose} />
          </Absolute>
          <Text>Menu</Text>
        </Relative>
      </StyledDrawer>
    );
  }
}

export default Menu;
