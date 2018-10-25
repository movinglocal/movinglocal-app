import uniq from 'lodash.uniq';
import { updateRelation } from '~/services/apiUser';

export const settingsActions = () => ({
  addTags: async (state, ids) => {
    const idArray = Array.isArray(ids) ? ids : [ids];
    const uniqIds = uniq(idArray);
    const userTags = [...state.userTags, ...uniqIds];

    updateRelation('tags', userTags);

    return {
      userTags
    };
  },

  removeTags: async (state, ids) => {
    const idArray = Array.isArray(ids) ? ids : [ids];
    const uniqIds = uniq(idArray);
    const userTags = state.userTags.filter(tagId => uniqIds.includes(tagId));

    updateRelation('tags', userTags);

    return {
      userTags
    };
  },

  updateUserPosition: (state, userPosition) => ({
    userPosition
  })
});

export default {
  settingsActions
};
