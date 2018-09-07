import createStore from 'unistore';

import { loadData, loadItem } from '~/services/api';

export const Store = createStore({
  isLoading: true,
  data: [],
  pageSize: 100,
  pageStart: 0,
  currentSortOption: 'date',
  currentSortDirection: ':DESC',
  sortOptions: [
    { label: 'Datum', value: 'date' },
    { label: 'Quelle', value: 'source' }
  ],
  sortDirections: [':ASC', ':DESC'],
  sources: [],
  searchTerm: '',
  favs: []
});

export const actions = store => ({
  loadData: state => (state.data.length === 0) && loadData(store, state),

  loadItem: (state, { id }) => loadItem(store, state, { id }),

  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const { data, isLoading } = await loadData(store, { ...state, pageStart });
    return { data: state.data.concat(data), isLoading };
  },

  sort: (state, event) => {
    const sortOption = event.target.value;
    store.setState({ currentSortOption: sortOption });
    return loadData(store, { ...state, currentSortOption: sortOption });
  },

  toggleSortDirection: (state) => {
    let sortDirection;
    const { currentSortDirection } = state;
    if (currentSortDirection === ':DESC') sortDirection = ':ASC';
    else sortDirection = ':DESC';
    store.setState({ currentSortDirection: sortDirection });
    return loadData(store, { ...state, currentSortDirection: sortDirection });
  },

  search: (state, searchTerm) => (searchTerm)
});

export default {
  Store,
  actions
};
