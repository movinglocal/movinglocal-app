import { loadSources } from '~/services/api';
import { add, get, remove } from '~/services/db';

const COLLECTION = 'sources';

export const settingsActions = () => ({
  loadSources: async (state) => {
    const { favs } = await get(COLLECTION);
    const { sources, isLoading } = await loadSources(state);
    favs.forEach((fav) => {
      const found = sources.find(source => source.id === fav.id);
      found.active = fav.active;
    });

    return { sources, isLoading };
  },

  toggleSource: async ({ sources }, id) => {
    const found = sources.find(s => s.id === id);
    if (found.active) await add(COLLECTION, { id, active: false });
    else await remove(COLLECTION, id);
    return {
      sources: sources.map(s => ({
        ...s,
        active: s.id === id ? !s.active : s.active
      }))
    };
  }
});

export default {
  settingsActions
};
