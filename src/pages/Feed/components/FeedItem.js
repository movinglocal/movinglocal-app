import React, { PureComponent } from 'react';
import { Box, Flex, Image, Text } from 'rebass';

const FeedTitle = ({ text }) => (
  <Text fontSize={2} fontWeight={700} mb={2}>{text}</Text>
);

const FeedTeaser = ({ text }) => (
  <Text fontSize={1} fontWeight={400}>{text}</Text>
);

class FeedItem extends PureComponent {
  render() {
    const { title, teaser } = this.props;
    return (
      <Flex bg="white" p={2} m={2}>
        <Box width={1 / 3}>
          <Image src="https://via.placeholder.com/200x200" />
        </Box>
        <Box width={2 / 3} px={2}>
          <FeedTitle text={title} />
          <FeedTeaser text={teaser} />
        </Box>
      </Flex>
    );
  }
}

export default FeedItem;
