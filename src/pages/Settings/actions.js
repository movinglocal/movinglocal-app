import { add, remove } from '~/services/db';
import { mergeSources } from '~/services/settings';
import { SOURCES_COLLECTION } from '~/config';

export const settingsActions = () => ({
  getSources: async () => mergeSources(),

  toggleSource: async ({ sources }, id) => {
    const found = sources.find(s => s.id === id);
    if (found.active) await add(SOURCES_COLLECTION, { id, active: false });
    else await remove(SOURCES_COLLECTION, id);
    return {
      data: [],
      isLoading: true,
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
