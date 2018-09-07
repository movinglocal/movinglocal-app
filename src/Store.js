import createStore from 'unistore';
import fetch from 'unfetch';

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
  searchTerm: ''
});

export const actions = store => ({
  loadData: state => loadData(store, state),

  loadItem: state => loadItem(store, state),

  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const { data, isLoading } = await loadData(store, { ...state, pageStart });
    return { data: state.data.concat(data), isLoading };
  },

  sort: (state, event) => {
    let { currentSortOption } = state;
    currentSortOption = event.target.value;
    store.setState({ currentSortOption });
    return loadData(store, { ...state, currentSortOption });
  },

  toggleSortDirection: (state) => {
    let { currentSortDirection } = state;
    if (currentSortDirection === ':DESC') currentSortDirection = ':ASC';
    else if (currentSortDirection === ':ASC') currentSortDirection = ':DESC';
    store.setState({ currentSortDirection });
    return loadData(store, { ...state, currentSortDirection });
  },

  search: (state, searchTerm) => (searchTerm)
});

export default {
  Store,
  actions
};
