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
  },
  sources: []
});

export const actions = () => ({
  loadData: async ({ page, sortOptions, sources }) => {
    let data = null;
    const { pageSize, pageStart } = page;
    const { current } = sortOptions;
    let url = `https://movinglocal-api.herokuapp.com/article?_limit=${pageSize}&_start=${pageStart}&_sort=${current}`;
    sources.forEach((source) => {
      if (!source.active) url = url.concat(`&source_ne=${source.id}`);
    });
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
  },

  search: async ({ page }, event) => {
    const search = event.target.value;
    console.log(search)
    return { search };
  }
});

export const settingsActions = () => ({
  loadSources: async ({ sources }) => {
    if (sources.length) return { sources };
    try {
      sources = await fetch('https://movinglocal-api.herokuapp.com/source')
        .then(r => r.json())
        .then(r => r.map((s) => {
          s.active = true;
          return s;
        }));
    } catch (err) {
      console.log(err);
    }
    return { sources };
  },

  toggleSource: ({ sources }, id) => {
    return {
      sources: sources.map((s) => {
        return {
          ...s,
          active: s.id === id ? !s.active : s.active
        };
      })
    };
  }
});

export default {
  Store,
  actions,
  settingsActions
};
