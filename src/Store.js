import createStore from 'unistore';
import fetch from 'unfetch';

export const Store = createStore({
  isLoading: true,
  data: [],
  page: { pageSize: 10, pageStart: 0 }
});

export const actions = () => ({
  loadData: async ({ page, data }) => {
    let res = null;
    const { pageSize, pageStart } = page;
    try {
      res = await fetch(`https://movinglocal-api.herokuapp.com/article?_limit=${pageSize}&_start=${pageStart}`)
        .then(r => r.json())
        .then(r => r.filter(e => !e.ignored))
        .then(r => data.concat(r));
    } catch (err) {
      console.log(err);
    }
    return { data: res, isLoading: false };
  },

  incrementPage: ({ page }) => (
    {
      page: {
        pageSize: page.pageSize,
        pageStart: page.pageStart + page.pageSize
      }
    }
  ),

  loadNextPage: async ({ page, data }) => {
    const { incrementPage, loadData } = actions();

    const { page: p } = incrementPage({ page });
    const { data: d } = await loadData({ page, data });
    return { page: p, data: d };
  }
});

export default {
  Store,
  actions
};
