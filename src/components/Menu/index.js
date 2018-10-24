import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Text, Box } from 'rebass';

const Drawer = styled(Box)`
  box-shadow: ${props => (props.open ? '1px 0 6px 2px rgba(0, 0, 0, 0.1)' : 'none')};
  position: absolute;
  left:0;
  height: 100%;
  width: 250px;
  transform: translate(${props => (props.open ? '0' : '-100%')}, 0);
  transition: transform .2s;
`;

class Menu extends PureComponent {
  render() {
    return (
      <Drawer
        open={this.props.open}
        side="left"
        p={3}
        bg="white"
        color="black"
      >
        <Box css={{ position: 'relative' }}>
          <Box css={{ position: 'absolute', right: '5px', top: 0 }}>
            <Box px={0} py={0} onClick={this.props.onClose}>x</Box>
          </Box>
          <Text>Menu</Text>
        </Box>
      </Drawer>
    );
  }
}

export default Menu;
