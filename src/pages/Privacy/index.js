import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

class Privacy extends PureComponent {
  render() {
    return (
      <Box css={{ flexGrow: 1 }} p={3}>
        <Heading>Datenschutzerklärung von molo.news</Heading>
      </Box>
    );
  }
}

export default Privacy;
