import React, { PureComponent } from 'react';
import {
  Flex,
  Text,
  Box,
  Link
} from 'rebass';
import { connect } from 'unistore/react';

import { actions as ArticleActions } from '~/pages/Article/actions';
import { actions as FeedActions } from '~/pages/Feed/actions';

import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import FavButton from '~/components/FavButton';
import Sharer from '~/components/Sharer';
import Image from '~/components/Image';

function renderAuthor(source) {
  const url = `${config.ORGANISATION_PATH}/${source.organisation}`;

  return (
    <Text fontSize={1} fontWeight="normal" mb={2}>
      <span>Autor: </span>
      <Link href={url}>{source.name}</Link>
    </Text>
  );
}

function renderItem(item, props) {
  const {
    title, content, image, source, id
  } = item;

  const isFav = props.userFavs.find(fav => fav.id === id);

  return (
    <Box bg="white" p={2} m={2}>
      {image && <Image src={image.url} />}
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize={5} fontWeight="700" mt={2} mb={1}>{title}</Text>
          {source && renderAuthor(source)}
        </Box>
        <Box my={2}>
          <FavButton item={item} onToggle={props.onToggleFav} isFav={isFav} />
        </Box>
      </Flex>
      <Sharer item={item} />
      <Text fontSize={2} fontWeight="normal" mb={2} dangerouslySetInnerHTML={{ __html: content }} />
      <Flex flexWrap="wrap">
        {item.tags.map(tag => (
          <Box px={2} py={1} key={`ArticleTag__${tag.id}`} css={{ 'font-weight': '700' }}>
            #
            {tag.name}
          </Box>
        ))}
      </Flex>
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
      <ScrollWrapper>
        {item ? renderItem(item, this.props) : <Loader />}
      </ScrollWrapper>
    );
  }
}

export default connect(
  state => state,
  store => (
    Object.assign({}, FeedActions(store), ArticleActions(store))
  ),
)(Article);
