import { add, remove } from '~/services/db';

const { SOURCES_COLLECTION } = config;

export const settingsActions = () => ({
  toggleSource: async ({ sources }, id) => {
    const found = sources.find(s => s.id === id);
    if (found.active) await add(SOURCES_COLLECTION, { id, active: false });
    else await remove(SOURCES_COLLECTION, id);

    return {
      data: [],
      isLoading: true,
      pageStart: 0,
      sources: sources.map(s => ({
        ...s,
        active: s.id === id ? !s.active : s.active
      }))
    };
  },

  toggleTopic: async ({ userTopics }, item) => {
    return {
      userTopics
    };
  },

  updateUserPosition: (state, userPosition) => ({
    userPosition
  })
});

export default {
  settingsActions
};
