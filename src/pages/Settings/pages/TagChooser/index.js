import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {
 Box, Flex, Heading, Text
} from 'rebass';
import { connect } from 'unistore/react';
import Alert from 'react-feather/dist/icons/alert-triangle';

import { load } from '~/services/api';
import { settingsActions } from '~/pages/Settings/actions';
import Loader from '~/components/Loader';
import Button from '~/components/Button';

const TagButton = props => (
  <Button
    css={{
      background: props.isActive ? props.theme.colors.main : props.theme.colors.lightgray,
      color: props.isActive ? 'white' : props.theme.colors.darkgray
    }}
    fontSize={1}
    {...props}
  />
);

class TagChooser extends PureComponent {
  static propTypes = {
    isOnboarding: PropTypes.bool
  }

  static defaultProps = {
    isOnboarding: false
  }

  state = {
    topics: [],
    userTopics: []
  }

  componentDidMount() {
    load('topics').then(topics => this.setState({ topics }));
  }

  onToggleTag(item) {
    const exists = this.props.userTags.find(tag => tag.id === item.id);

    if (exists) {
      return this.props.removeTags(item);
    }

    this.props.addTags(item);
  }

  onToggleTopic = (item) => {
    this.setState((prevState) => {
      const exists = this.state.userTopics.find(topic => topic.id === item.id);
      const userTopics = exists
        ? prevState.userTopics.filter(topic => topic.id !== item.id)
        : [...prevState.userTopics, item];

      if (exists) {
        this.props.removeTags(item.tags);
      } else {
        this.props.addTags(item.tags);
      }

      return {
        userTopics
      };
    });
  }

  renderTopic = (topic) => {
    const exists = this.state.userTopics.find(userTopic => userTopic.id === topic.id);
    const multiSelectLabel = exists ? 'abwählen' : 'auswählen';
    const toggleTopicLabel = `Alle ${multiSelectLabel}`;

    return (
      <Box mb={3} key={topic.id}>
        <Flex mb={3}>
          <Text fontWeight="bold">{topic.name}</Text>
          <Button
            py={0}
            px={0}
            fontSize={1}
            bg="transparent"
            fontWeight="normal"
            color="main"
            ml="auto"
            onClick={() => this.onToggleTopic(topic)}
          >
            {toggleTopicLabel}
          </Button>
        </Flex>
        <Flex flexWrap="wrap">
          {topic.tags.map(tag => this.renderTag(tag))}
        </Flex>
      </Box>
    );
  }

  renderTag = (item) => {
    const isChecked = this.props.userTags.find(userTag => userTag.id === item.id);
    return (
      <TagButton
        key={item.id}
        mb={2}
        mr={2}
        px={3}
        borderRadius={50}
        isActive={!!isChecked}
        onClick={() => this.onToggleTag(item)}
        theme={this.props.theme}
      >
        {item.name}
      </TagButton>
    );
  }

  renderNextButton() {
    if (!this.props.isOnboarding) {
      return null;
    }

    if (!this.props.userTags.length) {
      return (
        <Flex color="main" mt={2} alignItems="center">
          <Alert />
          <Text ml={2} fontSize={1} fontWeight="bold">
            Bitte wähle mindestens ein Tag aus um fortzufahren.
          </Text>
        </Flex>
      );
    }

    return <Button onClick={this.props.nextStep}>Weiter</Button>;
  }

  render() {
    if (!this.state.topics.length) {
      return <Loader />;
    }

    return (
      <Fragment>
        {this.props.isOnboarding && <Heading mb={3}>Tags auswählen</Heading>}
        {this.state.topics.map(this.renderTopic)}
        {this.renderNextButton()}
      </Fragment>
    );
  }
}


export default connect(
  state => ({ userTags: state.userTags }),
  settingsActions
)(withTheme(TagChooser));
