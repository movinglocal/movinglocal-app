import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Redirect from 'react-router-dom/Redirect';
import { Heading, Text } from 'rebass';

import { reset } from '~/services/storage';
import { settingsActions } from '~/pages/Settings/actions';
import TagChooser from '~/pages/Settings/pages/TagChooser';
import PositionChooser from '~/pages/Settings/pages/PositionChooser';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import Button from '~/components/Button';

class Settings extends PureComponent {
  render() {
    const { isLoading, isInitial } = this.props;

    if (isInitial && !isLoading) {
      return <Redirect to={config.ONBOARDING_PATH} />;
    }

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
        <Button mt={3} bg="main" color="white" onClick={reset}>Anwendung zurücksetzen</Button>
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
