import React, { PureComponent } from 'react';
import {
  Box, Flex, Card, Text, Link
} from 'rebass';
import styled from 'styled-components';

import FavButton from '~/components/FavButton';
import { ARTICLE_PATH } from '~/config';
import { formatDate } from '~/utils';


const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-grow: 1;

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
  <Box width={1 / 3} mr={2}>
    <Card
      pb={0}
      backgroundImage={`url(${img})`}
      css={{ height: '100%' }}
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
      date
    } = this.props.item;

    const img = image ? image.url : imageUrl;
    const url = link || `${ARTICLE_PATH}/${id}`;

    return (
      <Flex bg="white" p={3} m={2}>
        <StyledLink href={url} color="black">
          {img && <FeedImage img={img} />}
          <Box>
            <Box mb={1}>
              {source && (
                <Text as="span" mr={2} fontSize={1} color="main" fontWeight="bold">{source.name}</Text>
              )}
              <Text as="span" fontSize={1} fontWeight="lighter">{formatDate(date)}</Text>
            </Box>

            <Text className="teaser__title" fontSize={3} fontWeight="bold" mb={2}>{title}</Text>
            <Text fontSize={1} fontWeight="normal">{teaser}</Text>
          </Box>
        </StyledLink>
        <FavButton item={this.props.item} />
      </Flex>
    );
  }
}

export default ArticleTeaser;
