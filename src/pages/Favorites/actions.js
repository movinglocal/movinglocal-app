import { updateRelation } from '~/services/apiUser';

export const favsActions = () => ({
  removeFav: (state, fav) => {
    const userFavs = state.userFavs.filter(f => f.id !== fav.id);
    updateRelation('favorites', userFavs.map(f => f.id));

    return { userFavs };
  },

  addFav: async (state, fav) => {
    const userFavs = [...state.userFavs, fav];
    updateRelation('favorites', userFavs.map(f => f.id));

    return { userFavs };
  }
});

export default {
  favsActions
};
