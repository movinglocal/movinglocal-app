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

    return (
      <Box mb={this.props.isOnboarding ? 0 : 4}>
        <Heading mb={3}>Organisationen auswählen:</Heading>
        <Box mb={3}>
          {organisations.map(d => this.renderOrganisation(d))}
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
