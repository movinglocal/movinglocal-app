import React, { PureComponent, Fragment } from 'react';
import { Box, Flex, Heading } from 'rebass';
import { connect } from 'unistore/react';

import { load } from '~/services/api';
import actions from '~/pages/Settings/actions';
import Switch from '~/components/Switch';
import Loader from '~/components/Loader';
import Button from '~/components/Button';

class TopicChooser extends PureComponent {
  state = {
    topics: []
  }

  componentDidMount() {
    load('topics').then(topics => this.setState({ topics }));
  }

  renderTopic = (item) => {
    const isChecked = this.props.userTopics.find(userTopic => userTopic.id === item.id);
    return (
      <Flex key={item.id} mb={3}>
        <Box width={1 / 2}>{item.name}</Box>
        <Switch checked={isChecked} onClick={() => this.props.toggleTopic(item.id)} />
      </Flex>
    );
  };

  render() {
    if (!this.state.topics.length) {
      return <Loader />;
    }

    return (
      <Fragment>
        <Heading mb={3}>Themen auswählen</Heading>
        {this.state.topics.map(this.renderTopic)}
        {this.props.nextStep && <Button onClick={this.props.nextStep}>Weiter</Button>}
      </Fragment>
    );
  }
}


export default connect(
  state => ({ userTopics: state.userTopics }),
  actions
)(TopicChooser);
