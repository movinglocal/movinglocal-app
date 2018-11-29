import { loadItems, checkNewItems } from '~/services/api';
import { updateUser } from '~/services/storage';
import { updateRelation } from '~/services/apiUser';
import { setTimeout } from 'timers';

const { WATCH_INTERVAL } = config;

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
  loadInitalPage: async () => {
    store.setState({ pageStart: 0 });
    const data = await loadItems();

    return {
      data,
      newData: null,
      isLoading: false,
      isAppLoading: false,
      endOfFeed: data.length === 0
    };
  },

  loadNextPage: async (state) => {
    if (state.isLoading) {
      return {};
    }
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

  watch: async () => {
    const watch = () => setTimeout(async () => {
        const data = await loadItems(true);
        const currentData = store.getState().data;
        const newData = data.filter(d => !currentData.map(cd => cd.id).includes(d.id));
        store.setState({ newData });
        watch();
      }, WATCH_INTERVAL);

    watch();
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

  search: async (state, searchTerm) => {
    store.setState({
      searchTerm,
      data: [],
      pageStart: 0,
      isLoading: true
    });
    const data = await loadItems();

    return {
      data,
      isLoading: false
    };
  },

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
