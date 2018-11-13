import { loadItems } from '~/services/api';

export const actions = store => ({
  search: async (state, searchTerm) => {
    store.setState({
      searchTerm,
      data: [],
      pageStart: 0,
      isLoading: true
    });
    const data = await loadItems();

    return {
      data,
      isLoading: false
    };
  }
});

export default {
  actions
};
