import React, { PureComponent, Fragment } from 'react';
import { Box, Flex, Heading } from 'rebass';
import { connect } from 'unistore/react';

import { load } from '~/services/api';
import { settingsActions } from '~/pages/Settings/actions';
import Switch from '~/components/Switch';
import Loader from '~/components/Loader';
import Button from '~/components/Button';

class TopicChooser extends PureComponent {
  state = {
    topics: [],
    userTopics: []
  }

  componentDidMount() {
    load('topics').then(topics => this.setState({ topics }));
  }

  onToggleTopic = (item) => {
    this.setState((prevState) => {
      const exists = this.state.userTopics.find(topic => topic.id === item.id);
      const userTopics = exists
        ? prevState.userTopics.filter(topic => topic.id !== item.id)
        : [...prevState.userTopics, item];

      const tags = userTopics.reduce((res, t) => res.concat(t.tags), []);

      if (exists) {
        this.props.removeTags(tags);
      } else {
        this.props.addTags(tags);
      }

      return {
        userTopics
      };
    });
  }

  renderTopic = (item) => {
    const isChecked = this.state.userTopics.find(topic => topic.id === item.id);
    return (
      <Flex key={item.id} mb={3}>
        <Box width={1 / 2}>{item.name}</Box>
        <Switch checked={!!isChecked} onClick={() => this.onToggleTopic(item)} />
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
  () => {},
  settingsActions
)(TopicChooser);
