import React from 'react';
import { Flex } from 'rebass';

import CheckIcon from 'react-feather/dist/icons/check';

export default () => (
  <Flex p={3} m={2}>
    <CheckIcon />
    Glückwunsch! Du hast alle wichtigen Nachrichten des Tages gelesen!
  </Flex>
);
