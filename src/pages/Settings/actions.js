import uniqBy from 'lodash.uniqby';
import { updateRelation } from '~/services/apiUser';

export const settingsActions = () => ({
  addTags: async (state, tags) => {
    const tagArray = Array.isArray(tags) ? tags : [tags];
    const uniqTags = uniqBy(tagArray, 'id');
    const userTags = uniqBy([...state.userTags, ...uniqTags], 'id');

    updateRelation('tags', userTags.map(t => t.id));

    return {
      userTags
    };
  },

  removeTags: async (state, ids) => {
    const tagArray = Array.isArray(ids) ? ids : [ids];
    const uniqTags = uniqBy(tagArray, 'id');
    const userTags = state.userTags.filter(tag => !uniqTags.find(t => t.id === tag.id));

    updateRelation('tags', userTags.map(t => t.id));

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
