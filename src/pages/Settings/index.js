import React, { PureComponent } from 'react';
import {
  Heading,
  Subhead,
  Text,
  Switch,
  Flex,
  Box
} from 'rebass';
import ScrollWrapper from '~/components/ScrollWrapper';

import { connect } from 'unistore/react';
import { settingsActions } from '~/pages/Settings/actions';

function renderSource(source, toggleSource) {
  const {
    id, name, location, active
  } = source;

  return (
    <Flex bg="white" p={2} m={2} key={id}>
      <Box width={3 / 4} px={2}>
        <Text fontSize={2}>
          {name}
        </Text>
        <Text fontSize={1}>
          {location.name}
        </Text>
      </Box>
      <Box>
        <Switch checked={active} onClick={() => toggleSource(id)} />
      </Box>
    </Flex>
  );
}

class Settings extends PureComponent {
  componentDidMount() {
    this.props.loadSources();
  }

  render() {
    const { sources, toggleSource } = this.props;
    return (
      <ScrollWrapper p={3}>
        <Heading>Einstellungen</Heading>
        <Subhead>Quellen:</Subhead>
        {sources.map(s => renderSource(s, toggleSource))}
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
