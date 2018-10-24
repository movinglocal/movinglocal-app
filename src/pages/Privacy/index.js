import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

class Privacy extends PureComponent {
  render() {
    return (
      <Box css={{ flexGrow: 1 }} p={3}>
        <Heading>Datenschutz</Heading>
      </Box>
    );
  }
}

export default Privacy;
