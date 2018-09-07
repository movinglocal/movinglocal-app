import { loadSources } from '~/services/api';
import { add, get, remove } from '~/services/db';

const COLLECTION = 'sources';

export const settingsActions = () => ({
  loadSources: state => loadSources(state),

  toggleSource: async ({ sources }, id) => {
    const found = sources.find(s => s.id === id)
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
