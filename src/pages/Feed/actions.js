import { loadItems } from '~/services/api';
import { updateUser } from '~/services/storage';
import { updateRelation } from '~/services/apiUser';

function removeFav(state, fav) {
  const userFavs = state.userFavs.filter(f => f.id !== fav.id);
  updateRelation('favorites', userFavs.map(f => f.id));

  return { userFavs };
}

function addFav(state, fav) {
  const userFavs = [...state.userFavs, fav];
  updateRelation('favorites', userFavs.map(f => f.id));

  return { userFavs };
}

export const actions = store => ({
  loadNextPage: async (state) => {
    const pageStart = state.pageStart + state.pageSize;
    store.setState({ pageStart });
    const data = await loadItems();

    return {
      data: state.data.concat(data),
      isLoading: false,
      isAppLoading: false,
      endOfFeed: data.length === 0
    };
  },

  sort: async (state, event) => {
    const sortOption = event.target.value;
    store.setState({ currentSortOption: sortOption, pageStart: 0 });
    const data = await loadItems();

    return {
      data,
      isLoading: false
    };
  },

  toggleSortDirection: async (state) => {
    const { sortDirections, currentSortDirection } = state;
    const sortIndex = sortDirections.indexOf(currentSortDirection) === 0 ? 1 : 0;
    store.setState({ currentSortDirection: sortDirections[sortIndex], pageStart: 0 });
    const data = await loadItems();

    return {
      data,
      isLoading: false
    };
  },

  search: (state, searchTerm) => ({
    searchTerm,
    data: [],
    pageStart: 0,
    isLoading: true
  }),

  finishOnboarding: () => {
    updateUser({ isInitial: false });
    return {
      isInitial: false
    };
  },

  removeFav,
  addFav,
  onToggleFav: (state, fav) => {
    const exists = state.userFavs.find(userFav => userFav.id === fav.id);

    if (exists) {
      return removeFav(state, fav);
    }

    return addFav(state, fav);
  }
});

export default {
  actions
};
