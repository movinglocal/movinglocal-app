import { Store } from '~/Store';
import { loadSources } from '~/services/api';
import { get } from '~/services/db';
import { SOURCES_COLLECTION } from '~/config';

export const mergeSources = async () => {
  const { favs } = await get(SOURCES_COLLECTION);
  const state = Store.getState();
  const { sources } = await loadSources(state);

  return {
    sources: sources.map(source => ({
      ...source,
      active: favs.find(fav => fav.id === source.id)
    }))
  };
};

export default {
  mergeSources
};
