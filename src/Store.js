import createStore from 'unistore';
import { getStorageUser } from '~/services/storage';

const user = getStorageUser();

export const Store = createStore({
  isAppLoading: true,
  isLoading: true,
  data: [],
  pageSize: 10,
  pageStart: 0,
  endOfFeed: false,
  count: -1,
  currentSortOption: 'date',
  currentSortDirection: ':DESC',
  sortOptions: [
    { label: 'Nach Aktualität sortieren', value: 'date' },
    { label: 'Nach Medien und Kollektiven sortieren', value: 'source' }
  ],
  sortDirections: [':ASC', ':DESC'],
  searchTerm: '',

  // user settings
  isInitial: user && user.isInitial,
  userId: null,
  userTopics: [],
  userFavs: [],
  userTags: [],
  userPosition: null,
  userOrganisations: []
});

export default {
  Store
};
