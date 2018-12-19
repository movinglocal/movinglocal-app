import React, { PureComponent } from 'react';
import { Box, Heading, Text } from 'rebass';

import Button from '~/components/Button';

class OnboardingWelcome extends PureComponent {
  render() {
    return (
      <Box>
        <Heading>Willkommen bei molo.news</Heading>
        <Text my={3}>
          Bitte beachte, dass es sich bei dieser Webapp um einen Protoypen in der Testphase handelt.
        </Text>

        <Button onClick={this.props.nextStep}>Weiter</Button>
      </Box>
    );
  }
}

export default OnboardingWelcome;
