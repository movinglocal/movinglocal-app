import createStore from 'unistore';
import fetch from 'unfetch';

import { loadData } from '~/services/api';

export const Store = createStore({
  isLoading: true,
  data: [],
  page: { pageSize: 100, pageStart: 0 },
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
  loadData: async (state) => {
    const data = await loadData(store, state);
    return { data, isLoading: false };
  },

  loadItem: async (state, { id }) => {
    let item = null;
    store.setState({ isLoading: true });

    try {
      item = await fetch(`https://movinglocal-api.herokuapp.com/article/${id}`)
        .then(r => r.json());
    } catch (err) {
      console.log(err);
    }
    return { item, isLoading: false };
  },

  incrementPage: ({ page }) => (
    {
      page: {
        pageSize: page.pageSize,
        pageStart: page.pageStart + page.pageSize
      }
    }
  ),

  loadNextPage: async (state) => {
    const { incrementPage } = actions();
    const { page } = incrementPage({ page: state.page });
    const nextData = await loadData(store, state);

    return {
      page,
      data: state.data.concat(nextData),
      isLoading: false
    };
  },

  sort: async (state, event) => {
    let { currentSortOption } = state;
    currentSortOption = event.target.value;
    const data = await loadData(store, { ...state, currentSortOption });
    return { data, currentSortOption, isLoading: false };
  },

  toggleSortDirection: async (state) => {
    let { currentSortDirection } = state;
    if (currentSortDirection === ':DESC') currentSortDirection = ':ASC';
    else if (currentSortDirection === ':ASC') currentSortDirection = ':DESC';

    const data = await loadData(store, { ...state, currentSortDirection });

    return { data, currentSortDirection, isLoading: false };
  },

  search: async (state, event) => {
    const searchTerm = event.target.value;
    return { searchTerm };
  }
});

export default {
  Store,
  actions
};
