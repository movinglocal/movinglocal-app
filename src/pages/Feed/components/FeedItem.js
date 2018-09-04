import React, { PureComponent } from 'react';
import {
  Box, Flex, BackgroundImage, Text, Link
} from 'rebass';
import styled from 'styled-components';

const BackgroundImageFilled = styled(BackgroundImage)`
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none
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

class FeedItem extends PureComponent {
  render() {
    const { title, content, image_url, link, source } = this.props;
    return (
      <StyledLink href={link} color="black">
        <Flex bg="white" p={2} m={2}>
          <Box width={1 / 4}>
            <BackgroundImageFilled
              pb={0}
              src={ image_url || 'https://placehold.it/150x150' }
            />
          </Box>
          <Box width={3 / 4} px={2}>
            <FeedTitle text={title} />
            <FeedTeaser text={content} />
            {source && <FeedAttribution text={source.name} />}
          </Box>
        </Flex>
      </StyledLink>
    );
  }
}

export default FeedItem;
