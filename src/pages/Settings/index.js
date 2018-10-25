import React, { PureComponent } from 'react';
import {
  Heading, Text, Flex, Box
} from 'rebass';
import { connect } from 'unistore/react';

import { settingsActions } from '~/pages/Settings/actions';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import Switch from '~/components/Switch';

function renderSource(source, toggleSource) {
  const {
    id, name, organisation, active
  } = source;

  return (
    <Flex bg="white" p={2} m={2} key={id}>
      <Box width={3 / 4} px={2}>
        <Text fontSize={2}>
          {name}
        </Text>
        <Text fontSize={1}>
          {organisation && organisation.address}
        </Text>
      </Box>
      <Box>
        <Switch checked={active} onClick={() => toggleSource(id)} />
      </Box>
    </Flex>
  );
}

class Settings extends PureComponent {
  render() {
    const { sources, toggleSource, isLoading } = this.props;
    return (
      <ScrollWrapper p={3}>
        <Heading>Quellen:</Heading>
        {isLoading ? <Loader /> : sources.map(s => renderSource(s, toggleSource))}
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
