import { loadItems, countItems } from '~/services/api';

export const actions = store => ({
  init: async (state, user) => {
    if (state.data.length > 1) return {};
    store.setState({ isLoading: true });
    const count = await countItems();
    const data = await loadItems();

    return {
      data,
      count,
      userId: user.id,
      userFavs: user.favorites,
      userOrganisations: user.organisations,
      userTags: user.tags,
      userPosition: user.data.location ? [user.data.location[1], user.data.location[0]] : null,
      userPositionRadius: user.radius ? user.radius : config.map.userRadius,
      isLoading: false,
      isAppLoading: false,
      isInitial: user.isInitial
    };
  }
});

export default {
  actions
};
