import React, { PureComponent } from 'react';
import { Box, Heading } from 'rebass';

import Button from '~/components/Button';
import PrivacyText from '~/pages/Privacy/PrivacyText';

class OnboardingPrivacy extends PureComponent {
  render() {
    return (
      <Box>
        <Heading>Datenschutzerklärung von molo.news</Heading>
        <PrivacyText />
        <Button onClick={this.props.nextStep}>Ich stimme zu</Button>
      </Box>
    );
  }
}

export default OnboardingPrivacy;
