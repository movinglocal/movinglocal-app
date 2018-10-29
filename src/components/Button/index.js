import React from 'react';
import { Button } from 'rebass';

export default ({ css, ...props }) => (
  <Button
    bg="main"
    css={{
      cursor: 'pointer',
      '&:hover': { opacity: 0.85 },
      '&:focus': { outline: 'none' },
      ...css
    }}
    {...props}
  />
);
