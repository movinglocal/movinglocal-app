import React, { PureComponent } from 'react';
import {
  Box, Flex, BackgroundImage, Text, Link
} from 'rebass';
import styled from 'styled-components';

import FavButton from '~/components/FavButton';

import { ARTICLE_PATH } from '~/config';

const BackgroundImageFilled = styled(BackgroundImage)`
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const FeedTitle = ({ text }) => (
  <Text fontSize={3} fontWeight="normal" mb={2}>{text}</Text>
);

const FeedTeaser = ({ text }) => (
  <Text fontSize={1} fontWeight="normal">{text}</Text>
);

const FeedAttribution = ({ text }) => (
  <Text fontSize={1} fontWeight="bold">{text}</Text>
);

const FeedImage = ({ img }) => (
  <Box width={1 / 4}>
    <BackgroundImageFilled
      pb={0}
      src={img}
    />
  </Box>
);

const FeedDate = ({ text }) => (
  <Text fontSize={1} fontWeight="lighter">{text}</Text>
);

class ArticleTeaser extends PureComponent {
  render() {
    const { item } = this.props;

    const {
      id,
      title,
      teaser,
      image_url,
      image,
      link,
      source,
      date
    } = item;

    const img = image ? image.url : image_url;
    const url = link || `${ARTICLE_PATH}/${id}`;

    return (
      <StyledLink href={url} color="black">
        <Flex bg="white" p={2} m={2}>
          {img && <FeedImage img={img} />}
          <Box width={3 / 4} px={2}>
            <FeedTitle text={title} />
            <FeedTeaser text={teaser} />
            {source && <FeedAttribution text={source.name} />}
            <FeedDate text={date} />
          </Box>
          <FavButton item={item} />
        </Flex>
      </StyledLink>
    );
  }
}

export default ArticleTeaser;
