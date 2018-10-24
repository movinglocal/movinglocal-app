import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

class Feedback extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading>Feedback</Heading>
      </Box>
    );
  }
}

export default Feedback;
