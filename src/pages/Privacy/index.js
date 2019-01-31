import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

import PrivacyText from './PrivacyText';

class Privacy extends PureComponent {
  render() {
    return (
      <Box p={3} css={{ flexGrow: 1, overflowY: 'auto', '-webkit-overflow-scrolling': 'touch' }}>
        <Heading>Datenschutzerklärung von molo.news</Heading>
        <PrivacyText />
      </Box>
    );
  }
}

export default Privacy;
