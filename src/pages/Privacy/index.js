import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

class Privacy extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1, overflowY: 'auto', '-webkit-overflow-scrolling': 'touch' }}>
        <Heading>Datenschutzerklärung von molo.news</Heading>
      </Box>
    );
  }
}

export default Privacy;
