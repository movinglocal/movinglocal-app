import { sendFeedback as apiSendFeedback } from '~/services/api';

export const feedbackActions = store => ({
  sendFeedback: async (state, props) => {
    const response = await apiSendFeedback(props.email, props.text);
    if (response.status === 200) {
      store.setState({ isFeedbackSent: true });

      setTimeout(() => store.setState({ isFeedbackSent: false }), 4000);
    }
  }
});

export default feedbackActions;
