import React, { PureComponent } from 'react';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import FavButton from '~/components/FavButton';
import { Text, Box, Image } from 'rebass';

import { connect } from 'unistore/react';
import { actions } from '~/pages/Article/actions';

import styled from 'styled-components';

function renderAuthor(users) {
  return (
    <Text fontSize={1} fontWeight="normal" mb={2}>
      Author:
      {' '}
      {users.map(user => user.username).join(',')}
    </Text>
  );
}

function renderItem(item) {
  const {
    title, content, image, users
  } = item;

  return (
    <Box bg="white" p={2} m={2}>
      <Text fontSize={3} fontWeight="normal" mb={2}>{title}</Text>
      <Text fontSize={1} fontWeight="normal" mb={2} dangerouslySetInnerHTML={{ __html: content }} />
      {users && renderAuthor(users)}
      {image && <Image src={image.url} />}
      <FavButton item={item} />
    </Box>
  );
}

class Article extends PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.loadItem({ id });
  }

  render() {
    const { item } = this.props;

    return (
      <ScrollWrapper bg="gray">
        {item ? renderItem(item) : <Loader />}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => state,
  actions
)(Article);
