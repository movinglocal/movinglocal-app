import { loadItem } from '~/services/api';

export const actions = () => ({
  loadItem: (state, { id }) => loadItem({ id })
});

export default {
  actions
};
