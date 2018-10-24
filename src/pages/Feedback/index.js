import React, { PureComponent } from 'react';
import { Box, Text, Heading } from 'rebass';

import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';

class Feedback extends PureComponent {
  onSubmit = (evt) => {
    evt.preventDefault();

    /* TODO: add feedback api handling */
  }

  render() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading mb={2}>Feedback</Heading>
        <Text mb={2}>Hier kannst du uns Feedback hinterlassen:</Text>

        <form onSubmit={this.onSubmit}>
          <Input placeholder="Ihre E-Mail ..." name="email" style={{ margin: '16px 0 10px 0' }} />
          <TextArea name="message" />
          <Button mt={2} type="submit" bg="main">Abschicken</Button>
        </form>
      </Box>
    );
  }
}

export default Feedback;
