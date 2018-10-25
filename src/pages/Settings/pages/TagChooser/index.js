import React, { PureComponent, Fragment } from 'react';
import { Box, Flex, Heading } from 'rebass';
import { connect } from 'unistore/react';

import { load } from '~/services/api';
import actions from '~/pages/Settings/actions';
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

  renderTag = (item) => {
    const isChecked = this.props.userTags.find(userTag => userTag.id === item.id);
    return (
      <Flex key={item.id} mb={3}>
        <Box width={1 / 2}>{item.name}</Box>
        <Switch checked={isChecked} onClick={() => this.props.toggleTag(item.id)} />
      </Flex>
    );
  };

  render() {
    if (!this.state.tags.length) {
      return <Loader />;
    }

    return (
      <Fragment>
        <Heading mb={3}>Tags ausählen</Heading>
        {this.state.tags.map(this.renderTag)}
        {this.props.nextStep && <Button onClick={this.props.nextStep}>Weiter</Button>}
      </Fragment>
    );
  }
}


export default connect(
  state => ({ userTags: state.userTags }),
  actions
)(TagChooser);
