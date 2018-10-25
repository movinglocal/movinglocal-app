import React, { PureComponent } from 'react';
import { Heading, Text } from 'rebass';
import { connect } from 'unistore/react';

import { settingsActions } from '~/pages/Settings/actions';
import TagChooser from '~/pages/Settings/pages/TagChooser';
import PositionChooser from '~/pages/Settings/pages/PositionChooser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';


class Settings extends PureComponent {
  render() {
    const { isLoading } = this.props;

    if (isLoading) {
      return (
        <ScrollWrapper p={3}>
          <Loader />
        </ScrollWrapper>
      );
    }

    return (
      <ScrollWrapper p={3}>
        <Heading>Filter</Heading>
        <Text my={3}>Hier kannst du deine Suche nach deinen persönlichen Vorlieben anpassen.</Text>
        <TagChooser />
        <PositionChooser />
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => ({
    sources: state.sources
  }),
  settingsActions
)(Settings);
