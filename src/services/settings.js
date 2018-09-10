import { Store } from '~/Store';
import { loadSources } from '~/services/api';
import { get } from '~/services/db';
import { SOURCES_COLLECTION } from '~/config';

export const getSources = async () => {
  const { favs } = await get(SOURCES_COLLECTION);
  const state = Store.getState();
  const { sources } = await loadSources(state);
  sources.forEach((source) => {
    const found = favs.find(fav => fav.id === source.id);
    if (found) source.active = found.active;
  });

  return { sources: sources.map(source => ({ ...source })) };
};

export default {
  getSources
};
