import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Flex, Text, Heading
 } from 'rebass';
import { connect } from 'unistore/react';

import { load } from '~/services/api';
import { settingsActions } from '~/pages/Settings/actions';

import Button from '~/components/Button';
import FollowButton from './FollowButton';

class OrganisationChooser extends PureComponent {
  state = {
    organisations: []
  }

  static propTypes = {
    isOnboarding: PropTypes.bool,
    nextStep: PropTypes.func
  }

  static defaultProps = {
    isOnboarding: false,
    nextStep: () => {}
  }

  componentDidMount() {
    load('organisations').then(organisations => this.setState({ organisations }));
  }

  toggleOrganisation(data) {
    this.props.toggleOrganisation(data);
  }

  renderOrganisation(data) {
    const { userOrgIds } = this.props;
    const onClick = () => this.toggleOrganisation(data);
    const isActive = userOrgIds.includes(data.id);
    const label = isActive ? 'Entfolgen' : 'Folgen';

    return (
      <Flex mb={3} alignItems="center" key={data.name}>
        <Text>{data.name}</Text>
        <FollowButton
          onClick={onClick}
          isActive={isActive}
          label={label}
        />
      </Flex>
    );
  }

  render() {
    const { isOnboarding, nextStep } = this.props;
    const { organisations } = this.state;
    const media = organisations.filter(o => o.category === 'News');
    const collective = organisations.filter(c => c.category === 'Kollektiv');

    return (
      <Box mb={this.props.isOnboarding ? 0 : 4}>
        <Heading mb={3}>Welchen Medien willst du folgen?</Heading>
        <Text my={3}>Wähle die Medien aus, deren Molos (Nachrichten und Informationen) dich interessieren. Von diesen Medien werden alle Inhalte angezeigt, auch wenn du den entsprechenden Tags nicht folgst.</Text>
        <Box mb={3}>
          {media.map(d => this.renderOrganisation(d))}
        </Box>
        <Heading mb={3}>Welchen Kollektiven willst du folgen?</Heading>
        <Text my={3}>Wähle die Kollektive aus, deren Molos (Nachrichten und Informationen)dich interessieren. Von diesen Kollektiven werden alle Inhalte angezeigt, auch wenn du den entsprechenden Tags nicht folgst.</Text>
        <Box mb={3}>
          {collective.map(d => this.renderOrganisation(d))}
        </Box>
        {isOnboarding && (
          <Flex>
            <Box ml="auto">
              <Button mr={3} bg="transparent" color="main" onClick={nextStep}>Überspringen</Button>
              <Button onClick={nextStep}>Speichern und weiter</Button>
            </Box>
          </Flex>
        )}
      </Box>
    );
  }
}

export default connect(state => ({
  userOrgIds: state.userOrganisations.map(org => org.id)
}), settingsActions)(OrganisationChooser);
