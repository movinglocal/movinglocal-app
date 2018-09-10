import React, { PureComponent } from 'react';
import {
  Box, Flex, BackgroundImage, Text, Link, ButtonCircle
} from 'rebass';
import styled from 'styled-components';

import { connect } from 'unistore/react';
import { favsActions } from '~/pages/Favorites/actions';

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
  addToFavorites = (evt) => {
    evt.preventDefault();
    const { id, title, content, image_url, image, link, source, date, addToFavs } = this.props;
    this.props.addOrRemoveFav({id, title, content, image_url, image, link, source, date});
  }

  render() {
    const {
      id,
      title,
      content,
      image_url,
      image,
      link,
      source,
      date,
      favs
    } = this.props;
    const img = image ? image.url : image_url;
    const url = link || `artikel/${id}`;
    const isFav = favs.find(f => f.id === id);
    const favColor = isFav ? 'yellow' : 'white';

    return (
      <StyledLink href={url} color="black">
        <Flex bg="white" p={2} m={2}>
          {img && <FeedImage img={img} />}
          <Box width={3 / 4} px={2}>
            <FeedTitle text={title} />
            <FeedTeaser text={content} />
            {source && <FeedAttribution text={source.name} />}
            <FeedDate text={date} />
          </Box>
          <Box ml="auto">
            <ButtonCircle color={favColor} onClick={this.addToFavorites}>★</ButtonCircle>
          </Box>
        </Flex>
      </StyledLink>
    );
  }
}

export default connect(
  state => state,
  favsActions
)(ArticleTeaser);
