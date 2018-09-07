import { loadSources } from '~/services/api';

export const settingsActions = () => ({
  loadSources: state => loadSources(state),

  toggleSource: ({ sources }, id) => ({
    sources: sources.map(s => ({
      ...s,
      active: s.id === id ? !s.active : s.active
    }))
  })
});

export default { settingsActions };
