import { loadItems, countItems } from '~/services/api';
import { mergeSources } from '~/services/settings';
import { get } from '~/services/db';
import { FAVS_COLLECTION } from '~/config';


export const actions = store => ({
  init: async (state) => {
    if (state.data.length > 1) return {};
    store.setState({ isLoading: true });
    const sources = await mergeSources();
    store.setState({ sources });
    const count = await countItems();
    const favs = await get(FAVS_COLLECTION);
    const data = await loadItems();

    return {
      data,
      count,
      favs,
      isLoading: false,
      isAppLoading: false
    };
  }
});

export default {
  actions
};
