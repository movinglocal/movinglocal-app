import React, { PureComponent } from 'react';
import ScrollWrapper from '~/components/ScrollWrapper';
import Loader from '~/components/Loader';
import FavButton from '~/components/FavButton';
import { Text, Box, Image } from 'rebass';

import { connect } from 'unistore/react';
import { actions as ArticleActions } from '~/pages/Article/actions';
import { actions as FeedActions } from '~/pages/Feed/actions';


function renderAuthor(source) {
  return (
    <Text fontSize={1} fontWeight="normal" mb={2}>
      Author:
      {source.name}
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
      <Text fontSize={3} fontWeight="normal" mb={2}>{title}</Text>
      <Text fontSize={1} fontWeight="normal" mb={2} dangerouslySetInnerHTML={{ __html: content }} />
      {source && renderAuthor(source)}
      {image && <Image src={image.url} />}
      <FavButton item={item} onToggle={props.onToggleFav} isFav={isFav} />
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
