import { sendFeedback as apiSendFeedback } from '~/services/api';

export const feedbackActions = () => ({
  sendFeedback: async (state, props) => {
    const response = await apiSendFeedback(props.email, props.text);
    if (response.status === 200) return { isFeedbackSent: true };
  }
});

export default feedbackActions;
