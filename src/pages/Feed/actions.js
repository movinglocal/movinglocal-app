import { loadItem, loadItems, countItems } from '~/services/api';
import { mergeSources } from '~/services/settings';

export const actions = store => ({
  initSources: () => mergeSources(),

  initData: async (state) => {
    if (state.data.length > 1) return {};

    const { count } = await countItems();
    store.setState({ count });

    return loadItems();
  },

  loadItem: (state, { id }) => loadItem({ id }),

  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const { data, isLoading } = await loadItems();
    return { data: state.data.concat(data), isLoading };
  },

  sort: (state, event) => {
    const sortOption = event.target.value;
    store.setState({ currentSortOption: sortOption, pageStart: 0 });
    return loadItems();
  },

  toggleSortDirection: (state) => {
    const sortIndex = state.sortDirections[state.currentSortDirection] === 0 ? 1 : 0;
    store.setState({ currentSortDirection: state.sortDirections[sortIndex], pageStart: 0 });

    return loadItems();
  },

  search: (state, searchTerm) => ({
    searchTerm,
    data: [],
    pageStart: 0,
    isLoading: true
  })
});

export default {
  actions
};
