import React from 'react';
import { Text, Box } from 'rebass';
import CloseIcon from 'react-feather/dist/icons/x';

import Button from '~/components/Button';

export default props => (
  <Box bg="main" color="white" p={3} css={{ position: 'relative' }}>
    <Button
      css={{
        position: 'absolute', right: '5px', top: 0, height: '100%'
      }}
      onClick={props.onClose}
      m={0}
      bg="transparent"
    >
      <CloseIcon />
    </Button>
    <Text fontWeight="bold">Menu</Text>
  </Box>
);
