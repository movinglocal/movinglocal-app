import React, { PureComponent } from 'react';
import { Box, Heading, Text } from 'rebass';

import Button from '~/components/Button';

class OnboardingPrivacy extends PureComponent {
  render() {
    return (
      <Box>
        <Heading>Datenschutzerklärung</Heading>
        <Text my={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>

        <Button onClick={this.props.nextStep}>Ich stimme zu</Button>
      </Box>
    );
  }
}

export default OnboardingPrivacy;
