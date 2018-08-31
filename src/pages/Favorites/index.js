import React, { PureComponent } from 'react';
import { Heading } from 'rebass';
import ScrollWrapper from '~/components/ScrollWrapper';

class Favorites extends PureComponent {
  render() {
    return (
      <ScrollWrapper p={3}>
        <Heading>Favoriten</Heading>
      </ScrollWrapper>
    );
  }
}

export default Favorites;
