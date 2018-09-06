export const settingsActions = () => ({
  loadSources: async ({ sources }) => {
    if (sources.length) return { sources };
    try {
      sources = await fetch('https://movinglocal-api.herokuapp.com/source')
        .then(r => r.json())
        .then(r => r.map((s) => {
          s.active = true;
          return s;
        }));
    } catch (err) {
      console.log(err);
    }
    return { sources };
  },

  toggleSource: ({ sources }, id) => {
    return {
      sources: sources.map((s) => {
        return {
          ...s,
          active: s.id === id ? !s.active : s.active
        };
      })
    };
  }
});

export default { settingsActions };
