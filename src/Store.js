import createStore from 'unistore';

export const Store = createStore({
  isAppLoading: true,
  isLoading: true,
  data: [],
  pageSize: 3,
  pageStart: 0,
  endOfFeed: false,
  count: -1,
  currentSortOption: 'date',
  currentSortDirection: ':DESC',
  sortOptions: [
    { label: 'Datum', value: 'date' },
    { label: 'Quelle', value: 'source' }
  ],
  sortDirections: [':ASC', ':DESC'],
  searchTerm: '',

  // user settings
  isInitial: true,
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
