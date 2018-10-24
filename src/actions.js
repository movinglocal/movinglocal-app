import { loadItems, countItems } from '~/services/api';
import { mergeSources } from '~/services/settings';
import { get } from '~/services/db';

export const actions = store => ({
  init: async (state, userConfig) => {
    if (state.data.length > 1) return {};
    store.setState({ isLoading: true });
    const sources = await mergeSources();
    store.setState({ sources });
    const count = await countItems();
    const favs = await get(config.FAVS_COLLECTION);
    const data = await loadItems();

    return {
      data,
      count,
      favs,
      isLoading: false,
      isAppLoading: false,
      isInitial: userConfig.isInitial
    };
  }
});

export default {
  actions
};
