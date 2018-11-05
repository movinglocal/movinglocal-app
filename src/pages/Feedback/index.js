import React, { PureComponent } from 'react';
import { Box, Text, Heading } from 'rebass';
import { connect } from 'unistore/react';

import Input from '~/components/Input';
import TextArea from '~/components/TextArea';
import Button from '~/components/Button';

import FeedbackActions from './actions';

class Feedback extends PureComponent {
  state = {
    email: '',
    text: ''
  }

  onEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }

  onTextChange = (evt) => {
    this.setState({ text: evt.target.value });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.sendFeedback({
      email: this.state.email,
      text: this.state.text
    });
  }

  render() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading mb={2}>Feedback</Heading>
        <Text mb={2}>Hier kannst du uns Feedback hinterlassen:</Text>

        <form onSubmit={this.onSubmit}>
          <Input onChange={this.onEmailChange} placeholder="Ihre E-Mail ..." name="email" style={{ margin: '16px 0 10px 0' }} />
          <TextArea onChange={this.onTextChange} name="message" />
          <Button mt={2} type="submit" bg="main">Abschicken</Button>
        </form>
      </Box>
    );
  }
}

export default connect(null, FeedbackActions)(Feedback);
