import uniqBy from 'lodash.uniqby';
import { updateRelation, updatePosition } from '~/services/apiUser';

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

  updateUserPosition: (state, userPositionParams) => {
    updatePosition(userPositionParams);

    return {
      ...userPositionParams
    };
  },

  toggleOrganisation: (state, orgData) => {
    const stateOrganisations = state.userOrganisations;

    const userOrganisations = stateOrganisations.find(org => org.id === orgData.id)
      ? stateOrganisations.filter(org => org.id !== orgData.id)
      : stateOrganisations.concat([orgData]);

    updateRelation('organisations', userOrganisations.map(org => org.id));

    return {
      userOrganisations
    };
  }
});

export default {
  settingsActions
};
