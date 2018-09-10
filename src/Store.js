import createStore from 'unistore';

import { loadData, loadItem, countItems } from '~/services/api';
import { settingsActions } from '~/pages/Settings/actions';


export const Store = createStore({
  isLoading: true,
  data: [],
  pageSize: 100,
  pageStart: 0,
  count: -1,
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
  loadData: async (state) => {
    const { sources } = await settingsActions().loadSources(state);
    const { count } = await countItems({ ...state, sources });
    const { data, isLoading } = await loadData(store, { ...state, sources });
    return {
      sources,
      count,
      data,
      isLoading
    };
  },

  loadItem: (state, { id }) => loadItem(store, state, { id }),

  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const { data, isLoading } = await loadData(store, { ...state, pageStart });
    return { data: state.data.concat(data), isLoading };
  },

  sort: (state, event) => {
    const sortOption = event.target.value;
    store.setState({ currentSortOption: sortOption, pageStart: 0 });
    return loadData(store, { ...state, pageStart: 0, currentSortOption: sortOption });
  },

  toggleSortDirection: (state) => {
    let sortDirection;
    const { currentSortDirection } = state;
    if (currentSortDirection === ':DESC') sortDirection = ':ASC';
    else sortDirection = ':DESC';
    store.setState({ currentSortDirection: sortDirection });
    return loadData(store, { ...state, currentSortDirection: sortDirection });
  },

  search: (state, searchTerm) => ({ searchTerm, pageStart: 0 })
});

export default {
  Store,
  actions
};
