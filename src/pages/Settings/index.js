import React, { PureComponent } from 'react';
import { Heading } from 'rebass';
import ScrollWrapper from '~/components/ScrollWrapper';

class Settings extends PureComponent {
  render() {
    return (
      <ScrollWrapper p={3}>
        <Heading>Einstellungen</Heading>
      </ScrollWrapper>
    );
  }
}

export default Settings;
