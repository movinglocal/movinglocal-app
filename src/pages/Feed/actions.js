import { loadItems, countItems } from '~/services/api';
import { updateConfig } from '~/services/db';

export const actions = store => ({
  initData: async (state) => {
    if (state.data.length > 0) return {};

    const count = await countItems();
    const data = await loadItems();

    return {
      data,
      count,
      isLoading: false,
      isAppLoading: false
    };
  },

  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const data = await loadItems();

    return { data: state.data.concat(data), isLoading: false };
  },

  sort: async (state, event) => {
    const sortOption = event.target.value;
    store.setState({ currentSortOption: sortOption, pageStart: 0 });
    const data = await loadItems();

    return {
      data,
      isLoading: false
    };
  },

  toggleSortDirection: async (state) => {
    const { sortDirections, currentSortDirection } = state;
    const sortIndex = sortDirections.indexOf(currentSortDirection) === 0 ? 1 : 0;
    store.setState({ currentSortDirection: sortDirections[sortIndex], pageStart: 0 });
    const data = await loadItems();

    return {
      data,
      isLoading: false
    };
  },

  search: (state, searchTerm) => ({
    searchTerm,
    data: [],
    pageStart: 0,
    isLoading: true
  }),

  finishOnboarding: (state) => {
    updateConfig({ isInitial: false });
    return {
      isInitial: false
    };
  }
});

export default {
  actions
};
