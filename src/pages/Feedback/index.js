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
    this.setState({
      email: '',
      text: ''
    });
  }

  render() {
    return (
      <Box p={3} css={{ flexGrow: 1 }}>
        <Heading mb={2}>Feedback</Heading>
        <Text mb={2}>
          Sag uns deine Meinung zu molo.news!
          Hier kannst du uns ein Feedback schicken.
        </Text>

        <form onSubmit={this.onSubmit}>
          <Input onChange={this.onEmailChange} placeholder="Deine Emailadresse" name="email" style={{ margin: '16px 0 10px 0' }} value={this.state.email} />
          <TextArea onChange={this.onTextChange} placeholder="Deine Nachricht" name="message" value={this.state.text} />
          <Button mt={2} type="submit" bg="main">Abschicken</Button>
        </form>
        {this.props.isSent && <Text mt={2}>Dein Feedback wurde erfolgreich abgeschickt !</Text>}
      </Box>
    );
  }
}

export default connect(state => ({
  isSent: state.isFeedbackSent
}), FeedbackActions)(Feedback);
