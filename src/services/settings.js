import { loadSources } from '~/services/api';
import { get } from '~/services/db';

export const mergeSources = async () => {
  const localSources = await get(config.SOURCES_COLLECTION);
  const sources = await loadSources();

  return sources.map(source => ({
    ...source,
    active: !localSources.find(s => s.id === source.id)
  }));
};

export default {
  mergeSources
};
