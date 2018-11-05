import { sendFeedback as apiSendFeedback } from '~/services/api';

export const feedbackActions = () => ({
  sendFeedback: async (state, props) => {
    console.log(props);
    const response = await apiSendFeedback(props.email, props.text);
    console.log(response);
  }
});

export default feedbackActions;
