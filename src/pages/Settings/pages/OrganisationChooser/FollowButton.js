import React from 'react';
import Button from '~/components/Button';

const FollowButton = (props) => {
  const { isActive } = props;

  const style = {
    color: isActive ? 'white' : 'main',
    bg: isActive ? 'main' : 'transparent'
  };

  return (
    <Button
      py={2}
      px={2}
      fontSize={1}
      fontWeight="bold"
      borderColor="main"
      borderRadius={4}
      border={2}
      ml="auto"
      {...style}
      {...props}
    >
      {props.label}
    </Button>
  );
};

export default FollowButton;
