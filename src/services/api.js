import fetch from 'unfetch';

const BASE_URL = 'https://movinglocal-api.herokuapp.com';

function appendSearch(url, searchTerm) {
  if (searchTerm.length > 0) url = url.concat(`&_q=${searchTerm}`);
  return url;
}

function appendSources(url, sources) {
  sources.forEach((source) => {
    if (!source.active) url = url.concat(`&source_ne=${source.id}`);
  });

  return url;
}

function createURL(state) {
  const {
    pageSize,
    pageStart,
    currentSortOption,
    currentSortDirection,
    searchTerm,
    sources
  } = state;

  const sort = currentSortOption.concat(currentSortDirection);
  let url = `${BASE_URL}/article?_limit=${pageSize}&_start=${pageStart}&_sort=${sort}`;

  url = appendSearch(url, searchTerm);
  url = appendSources(url, sources);
  return url;
}

export async function loadItems(store, state) {
  store.setState({ isLoading: true });

  const url = createURL(state);

  let data = null;
  try {
    data = await fetch(url)
      .then(r => r.json())
      .then(r => r.filter(e => !e.ignored));
  } catch (err) {
    console.log(err);
  }

  return { data, isLoading: false };
}

export async function countItems(state) {
  const { sources, searchTerm } = state;
  let url = `${BASE_URL}/article/count?`;
  url = appendSources(url, sources);
  url = appendSearch(url, searchTerm);

  let count = null;
  try {
    count = await fetch(url)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }

  return { count, isLoading: false };
}

export async function loadItem(store, state, { id }) {
  store.setState({ isLoading: true });

  let item = null;
  try {
    item = await fetch(`${BASE_URL}/article/${id}`)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }
  return { item, isLoading: false };
}

export async function loadSources({ sources }) {
  if (sources.length) return { sources };
  try {
    sources = await fetch(`${BASE_URL}/source`)
      .then(r => r.json())
      .then(r => r.map((s) => {
        s.active = true;
        return s;
      }));
  } catch (err) {
    console.log(err);
  }
  return { sources, isLoading: false };
}

export default {
  loadItems,
  countItems,
  loadItem,
  loadSources
};
