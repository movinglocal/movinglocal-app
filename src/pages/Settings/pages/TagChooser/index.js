import React, { PureComponent, Fragment } from 'react';
import { Box, Flex, Heading } from 'rebass';
import { connect } from 'unistore/react';

import { load } from '~/services/api';
import { settingsActions } from '~/pages/Settings/actions';
import Switch from '~/components/Switch';
import Loader from '~/components/Loader';
import Button from '~/components/Button';

class TagChooser extends PureComponent {
  state = {
    tags: []
  }

  componentDidMount() {
    load('tags').then(tags => this.setState({ tags }));
  }

  onToggleTag(item) {
    const exists = this.props.userTags.find(tag => tag.id === item.id);

    if (exists) {
      return this.props.removeTags(item);
    }

    this.props.addTags(item);
  }

  renderTag = (item) => {
    const isChecked = this.props.userTags.find(userTag => userTag.id === item.id);
    return (
      <Flex key={item.id} mb={3}>
        <Box width={1 / 2}>{item.name}</Box>
        <Switch checked={!!isChecked} onClick={() => this.onToggleTag(item)} />
      </Flex>
    );
  };

  render() {
    if (!this.state.tags.length) {
      return <Loader />;
    }

    console.log(this.props.userTags)

    return (
      <Fragment>
        <Heading mb={3}>Tags auswählen</Heading>
        {this.state.tags.map(this.renderTag)}
        {this.props.nextStep && <Button onClick={this.props.nextStep}>Weiter</Button>}
      </Fragment>
    );
  }
}


export default connect(
  state => ({ userTags: state.userTags }),
  settingsActions
)(TagChooser);
