import createStore from 'unistore';
import fetch from 'unfetch';

export const Store = createStore({
  isLoading: true,
  data: false
});

export const actions = () => ({
  loadData: async () => {
    let data = null;
    try {
      data = await fetch('https://movinglocal-api.herokuapp.com/article')
        .then(r => r.json())
        .then(r => r.filter(e => !e.ignored));
    } catch (err) {
      console.log(err);
    }
    return { data, isLoading: false };
  }
});

export default {
  Store,
  actions
};
