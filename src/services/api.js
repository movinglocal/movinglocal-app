import fetch from 'unfetch';
import { Store } from '~/Store';
import { BASE_URL } from '~/config';

function appendSearch(url, searchTerm) {
  return (searchTerm.length > 0) ? url.concat(`&_q=${searchTerm}`) : url;
}

function appendSources(url, sources) {
  let newUrl = url;
  sources.forEach((source) => {
    if (!source.active) newUrl = newUrl.concat(`&source_ne=${source.id}`);
  });

  return newUrl;
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

export async function loadItems() {
  Store.setState({ isLoading: true });
  const state = Store.getState();

  const url = createURL(state);

  let data = null;
  try {
    data = await fetch(url)
      .then(r => r.json())
      .then(r => r.filter(e => !e.ignored));
  } catch (err) {
    console.log(err);
  }

  return { data, isLoading: false, isAppLoading: false };
}

export async function countItems() {
  const { sources, searchTerm } = Store.getState();
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

  return { count };
}

export async function loadItem({ id }) {
  Store.setState({ isLoading: true });

  let item = null;
  try {
    item = await fetch(`${BASE_URL}/article/${id}`)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }
  return { item, isLoading: false };
}

export async function loadSources() {
  let sources = [];

  try {
    sources = await fetch(`${BASE_URL}/source`)
      .then(r => r.json())
      .then(r => r.map(s => ({ ...s, active: true })));
  } catch (err) {
    console.log(err);
  }

  return sources;
}

export default {
  loadItems,
  countItems,
  loadItem,
  loadSources
};
