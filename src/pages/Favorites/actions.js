import db, { addFav, getFavs, removeFav } from '~/services/db';

export const favsActions = () => ({
  addOrRemoveFav: (state, fav) => {
    const found = state.favs.find(f => f.id === fav.id);
    if (found) removeFav(fav.id);
    else addFav(fav);
    return getFavs();
  },

  getFavs: () => getFavs(),

  removeFav: (state, { id }) => removeFav(id)
});

export default {
  favsActions
};
