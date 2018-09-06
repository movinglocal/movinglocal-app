import createStore from 'unistore';
import fetch from 'unfetch';

export const Store = createStore({
  isLoading: true,
  data: [],
  page: { pageSize: 100, pageStart: 0 },
  sortOptions: {
    current: 'date:DESC',
    options: [
      { label: 'Datum', value: 'date:DESC' },
      { label: 'Quelle', value: 'source:ASC' }
    ]
  }
});

export const actions = () => ({
  loadData: async ({ page, sortOptions }) => {
    let data = null;
    const { pageSize, pageStart } = page;
    const { current } = sortOptions;
    try {
      data = await fetch(`https://movinglocal-api.herokuapp.com/article?_limit=${pageSize}&_start=${pageStart}&_sort=${current}`)
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
      }
    }
  ),

  loadNextPage: async ({ page, data, sortOptions }) => {
    const { incrementPage, loadData } = actions();

    const { page: p } = incrementPage({ page });
    const { data: d } = await loadData({ page: p, sortOptions });
    return { page: p, data: data.concat(d) };
  },

  sort: async ({ page, sortOptions }, event) => {
    const { loadData } = actions();
    sortOptions.current = event.target.value;
    const { data } = await loadData({ page, sortOptions });
    return { data, page, sortOptions };
  }
});

export default {
  Store,
  actions
};
