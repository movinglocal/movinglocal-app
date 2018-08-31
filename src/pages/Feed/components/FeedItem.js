import React, { PureComponent } from 'react';
import {
  Box, Flex, BackgroundImage, Text
} from 'rebass';
import styled from 'styled-components';

const BackgroundImageFilled = styled(BackgroundImage)`
  height: 100%;
`;

const FeedTitle = ({ text }) => (
  <Text fontSize={3} fontWeight="normal" mb={2}>{text}</Text>
);

const FeedTeaser = ({ text }) => (
  <Text fontSize={1} fontWeight="normal">{text}</Text>
);

class FeedItem extends PureComponent {
  render() {
    const { title, teaser } = this.props;
    return (
      <Flex bg="white" p={2} m={2}>
        <Box width={1 / 4}>
          <BackgroundImageFilled
            pb={0}
            src="https://via.placeholder.com/150x150"
          />
        </Box>
        <Box width={3 / 4} px={2}>
          <FeedTitle text={title} />
          <FeedTeaser text={teaser} />
        </Box>
      </Flex>
    );
  }
}

export default FeedItem;
