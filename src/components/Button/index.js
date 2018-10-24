import React from 'react';
import { Button } from 'rebass';

export default ({ css, ...props }) => (
  <Button
    css={{
      cursor: 'pointer',
      '&:hover': { opacity: 0.75 },
      '&:focus': { outline: 'none', border: 'none' },
      ...css
    }}
    {...props}
  />
)