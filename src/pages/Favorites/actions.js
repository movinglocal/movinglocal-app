import { add, get, remove } from '~/services/db';

const COLLECTION = 'favs';

export const favsActions = () => ({
  addOrRemoveFav: (state, fav) => {
    const found = state.favs.find(f => f.id === fav.id);
    if (found) remove(COLLECTION, fav.id);
    else add(COLLECTION, fav);
    return get(COLLECTION);
  },

  getFavs: () => get(COLLECTION),

  removeFav: (state, { id }) => remove(COLLECTION, id)
});

export default {
  favsActions
};
