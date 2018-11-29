import React, { PureComponent } from 'react';
import { Box, Heading, Text } from 'rebass';

import Button from '~/components/Button';

class OnboardingInstallation extends PureComponent {
  render() {
    return (
      <Box>
        <Heading>Installiere die App</Heading>
        <Text my={3}>
          Du kannst die app installieren, indem du in der Optionen auf "Zum Startbildschirm zufügen" clickst.
        </Text>

        <Button onClick={this.props.nextStep}>Weiter</Button>
      </Box>
    );
  }
}

export default OnboardingInstallation;
