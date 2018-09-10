import api from '~/services/api';
import { mergeSources } from '~/services/settings';

export const actions = store => ({
  loadData: async (state) => {
    if (state.data.length > 1) return {};
    const { sources } = await mergeSources();
    const { count } = await api.countItems();
    const { data, isLoading } = await api.loadItems();
    return {
      sources,
      count,
      data,
      isLoading
    };
  },

  loadItem: (state, { id }) => api.loadItem({ id }),

  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const { data, isLoading } = await api.loadItems();
    return { data: state.data.concat(data), isLoading };
  },

  sort: (state, event) => {
    const sortOption = event.target.value;
    store.setState({ currentSortOption: sortOption, pageStart: 0 });
    return api.loadItems();
  },

  toggleSortDirection: (state) => {
    let sortDirection;
    const { currentSortDirection } = state;
    if (currentSortDirection === ':DESC') sortDirection = ':ASC';
    else sortDirection = ':DESC';
    store.setState({ currentSortDirection: sortDirection });
    return api.loadItems();
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
