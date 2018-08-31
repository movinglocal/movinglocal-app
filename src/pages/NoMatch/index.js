import React, { PureComponent } from 'react';
import { Heading, Text } from 'rebass';
import ScrollWrapper from '~/components/ScrollWrapper';

class NoMatch extends PureComponent {
  render() {
    return (
      <ScrollWrapper p={3}>
        <Heading>404!</Heading>
        <Text>Die Seite konnte nicht gefunden werden.</Text>
      </ScrollWrapper>
    );
  }
}

export default NoMatch;
