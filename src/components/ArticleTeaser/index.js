import React, { PureComponent } from 'react';
import {
  Box, Card, Text, Link
} from 'rebass';
import styled from 'styled-components';

import FavButton from '~/components/FavButton';
import Teaser from '~/components/ArticleTeaser/Teaser';
import { formatDate } from '~/utils';

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

    return (
      <Teaser
        bg="white"
        p={3}
        m={2}
        type={type}
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
            <Text fontSize={1} fontWeight="normal">{teaser}</Text>
          </Box>
        </StyledLink>
        <FavButton item={this.props.item} isFav={isFav} onToggle={this.props.onToggleFav} />
      </Teaser>
    );
  }
}

export default ArticleTeaser;
