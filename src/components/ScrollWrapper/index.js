import React from 'react';
import { Box } from 'rebass';

export default props => (
  <Box
    css={{
      overflowY: 'auto',
      '-webkit-overflow-scrolling': 'touch',
      flexGrow: 1
    }}
    {...props}
  />
);

