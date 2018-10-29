import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {
  Box, Flex, Text, Heading
 } from 'rebass';

import { load } from '~/services/api';

import Button from '~/components/Button';

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
    console.log('todo: toggle organisation', data);
    return this;
  }

  renderOrganisation(data) {
    return (
      <Flex mb={3} alignItems="center" key={data.name}>
        <Text>{data.name}</Text>
        <Button
          py={2}
          px={2}
          fontSize={1}
          bg="transparent"
          fontWeight="bold"
          color="main"
          borderColor="main"
          borderRadius={4}
          border={2}
          ml="auto"
          onClick={() => this.toggleOrganisation(data)}
        >
          Folgen
        </Button>
      </Flex>
    );
  }

  render() {
    const { isOnboarding, nextStep } = this.props;
    const { organisations } = this.state;

    return (
      <Fragment>
        <Heading mb={3}>Organisationen auswählen:</Heading>
        <Box mb={3}>
          {organisations.map(d => this.renderOrganisation(d))}
        </Box>
        {isOnboarding && <Button onClick={nextStep}>Weiter</Button>}
      </Fragment>

    );
  }
}

export default withTheme(OrganisationChooser);
