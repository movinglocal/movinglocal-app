import React from 'react';
import { Flex } from 'rebass';
import styled, { keyframes } from 'styled-components';
import LoaderIcon from 'react-feather/dist/icons/loader';

const rotate = props => keyframes`
  0% {
    transform: rotate(0deg);
    color: ${props.theme.colors.main};
  }
  50% {
    color: ${props.theme.colors.secondary};
  }
  100% {
    transform: rotate(360deg);
    color: ${props.theme.colors.main};
  }
`;

const AnimatedLoader = styled(LoaderIcon)`
  animation: ${rotate} 2.5s linear infinite;
`;

const Loader = () => (
  <Flex my={2} justifyContent="center" alignItems="center"><AnimatedLoader /></Flex>
);

export default Loader;
