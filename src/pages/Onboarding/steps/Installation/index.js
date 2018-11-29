import React, { PureComponent } from 'react';
import { Box, Heading, Text } from 'rebass';

import Button from '~/components/Button';

function getText() {
  const ua = window.navigator.userAgent;
  if (ua.match('Android') && ua.match('Chrome/[.0-9]* (?!Mobile)')) {
    return 'Du kannst molo.news auf Deinem Startbildschirm installieren. Dazu musst du im Browser-Menü „zum Starbildschirm hinzufügen” auswählen. molo.news erscheint nun als Icon auf deinen Startbildschirm.';
  }
  if (ua.match('iPhone') || ua.match('iPad')) {
    return 'Du kannst molo.news auf Deinem Startbildschirm installieren. Dazu musst du auf das „Teilen”-Symbol gehen und dort „Zum Home-Bildschirm” auswählen. molo.news erscheint nun als Icon auf deinen Startbildschirm.';
  }
}

class OnboardingInstallation extends PureComponent {
  render() {
    return (
      <Box>
        <Heading>Installiere die App</Heading>
        <Text my={3}>
          {getText()}
        </Text>

        <Button onClick={this.props.nextStep}>Weiter</Button>
      </Box>
    );
  }
}

export default OnboardingInstallation;
