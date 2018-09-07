import db from '~/services/db';

export const favsActions = () => ({
  addToFavs: async (state, { id, title }) => db.add({ id, title }),

  getFavs: async () => {
    const favs = await db.toArray();
    console.log(favs);
    return { favs };
  }
});

export default {
  favsActions
};
