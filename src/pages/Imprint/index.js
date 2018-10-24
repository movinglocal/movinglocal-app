import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

class Imprint extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading>Impressum</Heading>
      </Box>
    );
  }
}

export default Imprint;
