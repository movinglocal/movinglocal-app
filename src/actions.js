import { loadItems, countItems } from '~/services/api';
import { mergeSources } from '~/services/settings';
import { favsActions } from '~/pages/Favorites/actions';

export const actions = store => ({
  init: async (state) => {
    if (state.data.length > 1) return {};
    store.setState({ isLoading: true });
    const { sources } = await mergeSources();
    store.setState({ sources });
    const { count } = await countItems();
    const { favs } = await favsActions().getFavs();
    store.setState({ count, favs });

    return loadItems();
  }
});

export default {
  actions
};
