import { add, get, remove } from '~/services/db';

const { FAVS_COLLECTION } = config;

export const favsActions = () => ({
  addOrRemoveFav: async (state, fav) => {
    const found = state.favs.find(f => f.id === fav.id);

    if (found) {
      remove(FAVS_COLLECTION, fav.id);
    } else {
      add(FAVS_COLLECTION, fav);
    }

    const favs = await get(FAVS_COLLECTION);

    return { favs };
  },

  removeFav: (state, { id }) => {
    const favs = remove(FAVS_COLLECTION, id);

    return { favs };
  }
});

export default {
  favsActions
};
