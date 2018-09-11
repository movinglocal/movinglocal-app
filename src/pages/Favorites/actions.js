import { add, get, remove } from '~/services/db';
import { FAVS_COLLECTION } from '~/config';

export const favsActions = () => ({
  addOrRemoveFav: (state, fav) => {
    const found = state.favs.find(f => f.id === fav.id);
    if (found) remove(FAVS_COLLECTION, fav.id);
    else add(FAVS_COLLECTION, fav);
    return get(FAVS_COLLECTION);
  },

  removeFav: (state, { id }) => remove(FAVS_COLLECTION, id)
});

export default {
  favsActions
};
