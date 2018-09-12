import { loadItem } from '~/services/api';

export const actions = () => ({
  loadItem: async (state, { id }) => {
    const item = await loadItem({ id });

    return {
      item,
      isLoading: false
    };
  }
});

export default {
  actions
};
