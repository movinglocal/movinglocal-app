import createStore from 'unistore';
import fetch from 'unfetch';

import { loadData } from '~/services/api';

export const Store = createStore({
  isLoading: true,
  data: [],
  page: { pageSize: 100, pageStart: 0 },
  sortOptions: {
    current: {
      option: 'date',
      direction: ':DESC'
    },
    options: [
      { label: 'Datum', value: 'date' },
      { label: 'Quelle', value: 'source' }
    ],
    directions: [':ASC', ':DESC']
  },
  sources: [],
  searchTerm: ''
});

export const actions = store => ({
  loadData: async (state) => {
    store.setState({ isLoading: true });

    const data = await loadData(state);

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
      },
      isLoading: true
    }
  ),

  loadNextPage: async (state) => {
    const { incrementPage } = actions();
    const { page } = incrementPage({ page: state.page });
    const nextData = await loadData(state);

    return {
      page,
      data: state.data.concat(nextData)
    };
  },

  sort: async ({ page, sortOptions, sources, searchTerm }, event) => {
    sortOptions.current.option = event.target.value;
    const data = await loadData({
      page, sortOptions, sources, searchTerm
    });
    return { data, sortOptions };
  },

  toggleSortDirection: async ({ page, sortOptions, sources, searchTerm }) => {
    store.setState({ isLoading: true });

    if (sortOptions.current.direction === ':DESC') sortOptions.current.direction = ':ASC';
    else if (sortOptions.current.direction === ':ASC') sortOptions.current.direction = ':DESC';

    const data = await loadData({ page, sortOptions, sources, searchTerm });

    return {
      data,
      isLoading: false
    };
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
