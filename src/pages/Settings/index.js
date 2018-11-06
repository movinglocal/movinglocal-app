import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Heading, Text } from 'rebass';

import { reset } from '~/services/storage';
import { settingsActions } from '~/pages/Settings/actions';
import TagChooser from '~/pages/Settings/pages/TagChooser';
import PositionChooser from '~/pages/Settings/pages/PositionChooser';
import OrganisationChooser from '~/pages/Settings/pages/OrganisationChooser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import Button from '~/components/Button';

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
        <OrganisationChooser />
        <Button mt={3} bg="secondary" color="white" onClick={reset}>Anwendung zurücksetzen</Button>
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.isLoading,
    isInitial: state.isInitial
  }),
  settingsActions
)(Settings);
