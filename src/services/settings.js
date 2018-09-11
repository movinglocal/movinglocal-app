import { loadSources } from '~/services/api';
import { get } from '~/services/db';
import { SOURCES_COLLECTION } from '~/config';

export const mergeSources = async () => {
  const favs = await get(SOURCES_COLLECTION);
  const sources = await loadSources();

  return {
    sources: sources.map(source => ({
      ...source,
      active: !favs.find(fav => fav.id === source.id)
    })),
    isLoading: false
  };
};

export default {
  mergeSources
};
