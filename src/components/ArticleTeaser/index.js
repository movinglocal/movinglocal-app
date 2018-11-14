import React, { PureComponent } from 'react';
import {
  Box, Card, Text, Link
} from 'rebass';
import Swipeable from 'react-swipeable';
import styled from 'styled-components';

import FavButton from '~/components/FavButton';
import Teaser from '~/components/ArticleTeaser/Teaser';
import { formatDate, clipText } from '~/utils';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  padding-right: 16px;

  .teaser__title {
    transition: color .1s;
  }

  &:hover {
    .teaser__title {
      color: ${props => props.theme.colors.main};
    }
  }
`;

const FeedImage = ({ img }) => (
  <Box style={{ minWidth: '30%', width: '30%' }} mr={2}>
    <Card
      pb="72.5%"
      backgroundImage={`url(${img})`}
      backgroundSize="cover"
      backgroundPosition="center center"
    />
  </Box>
);

class ArticleTeaser extends PureComponent {
  state = {
    transformX: 0
  }

  onSwipeLeft = (evt, absX) => {
    this.setState({
      transformX: absX > 100 ? -100 : 0
    });
  }

  onSwipeRight = (evt, absX) => {
    this.setState({
      transformX: absX > 100 ? 100 : 0
    });
  }

  onSwipedLeft = () => {
    const { transformX } = this.state;
    const { onToggleFav, item } = this.props;

    this.setState({ transformX: 0 });

    if (Math.abs(transformX) > 0) {
      onToggleFav(item);
    }
  }

  onSwipedRight = () => {
    const { transformX } = this.state;
    const { onToggleFav, item } = this.props;

    this.setState({ transformX: 0 });

    if (Math.abs(transformX) > 0) {
      onToggleFav(item);
    }
  }

  render() {
    const {
      id,
      title,
      teaser,
      image_url: imageUrl,
      image,
      link,
      source,
      date,
      type
    } = this.props.item;

    const img = image ? image.url : imageUrl;
    const url = link || `${config.ARTICLE_PATH}/${id}`;
    const isFav = this.props.userFavs.find(fav => fav.id === id);
    const teaserText = clipText(teaser, 200, '...');

    return (
      <Swipeable
        onSwipingLeft={this.onSwipeLeft}
        onSwipingRight={this.onSwipeRight}
        onSwipedRight={this.onSwipedRight}
        onSwipedLeft={this.onSwipedLeft}
      >
        <Teaser
          bg="white"
          p={3}
          m={2}
          type={type}
          style={{ transform: `translate3d(${Math.floor(this.state.transformX)}px, 0, 0)`, transition: 'transform .1s' }}
        >
          <StyledLink href={url} color="black" target="_blank">
            {img && <FeedImage img={img} />}
            <Box>
              <Box mb={1}>
                {source && (
                  <Text as="span" mr={2} fontSize={1} color={type.toLowerCase()} fontWeight="bold">{source.name}</Text>
                )}
                <Text as="span" fontSize={1} fontWeight="lighter">{formatDate(date)}</Text>
              </Box>

              <Text className="teaser__title" fontSize={3} fontWeight="bold" mb={2}>{title}</Text>
              <Text fontSize={1} fontWeight="normal">{teaserText}</Text>
            </Box>
          </StyledLink>
          <FavButton item={this.props.item} isFav={isFav} onToggle={this.props.onToggleFav} />
        </Teaser>
      </Swipeable>
    );
  }
}

export default ArticleTeaser;
