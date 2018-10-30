import React from 'react';
import { withTheme } from 'styled-components';

import { Flex } from 'rebass';

const Teaser = (props) => {
  const borderColor = props.theme.colors[props.type.toLowerCase()];

  return (
    <Flex
      {...props}
      css={{
        borderLeft: borderColor ? `5px solid ${borderColor}` : 'none',
        borderRadius: '2px'
      }}
    />
  );
};

export default withTheme(Teaser);
