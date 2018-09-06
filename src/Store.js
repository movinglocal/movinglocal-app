import createStore from 'unistore';
import fetch from 'unfetch';

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

export const actions = () => ({
  loadData: async ({ page, sortOptions, sources, searchTerm }) => {
    let data = null;
    const { pageSize, pageStart } = page;
    const { current } = sortOptions;
    const sort = current.option.concat(current.direction);
    let url = `https://movinglocal-api.herokuapp.com/article?_limit=${pageSize}&_start=${pageStart}&_sort=${sort}`;
    sources.forEach((source) => {
      if (!source.active) url = url.concat(`&source_ne=${source.id}`);
    });
    if (searchTerm.length > 0) url = url.concat(`&_q=${searchTerm}`);
    try {
      data = await fetch(url)
        .then(r => r.json())
        .then(r => r.filter(e => !e.ignored))
    } catch (err) {
      console.log(err);
    }
    return { data, isLoading: false };
  },

  loadItem: async ({ item }, { id }) => {
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

  loadNextPage: async ({ page, data, sortOptions, sources, searchTerm }) => {
    const { incrementPage, loadData } = actions();

    const { page: p } = incrementPage({ page });
    const { data: d } = await loadData({
      page: p, sortOptions, sources, searchTerm
    });
    return { page: p, data: data.concat(d) };
  },

  sort: async ({ page, sortOptions, sources, searchTerm }, event) => {
    const { loadData } = actions();
    sortOptions.current.option = event.target.value;
    const { data } = await loadData({
      page, sortOptions, sources, searchTerm
    });
    return { data, page, sortOptions };
  },

  toggleSortDirection: ({ page, sortOptions, sources, searchTerm }) => {
    if (sortOptions.current.direction === ':DESC') sortOptions.current.direction = ':ASC';
    else if (sortOptions.current.direction === ':ASC') sortOptions.current.direction = ':DESC';
    return actions().loadData({
      page, sortOptions, sources, searchTerm
    });
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
