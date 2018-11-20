import fetch from 'unfetch';
import { Store } from '~/Store';
import { getStorageUser } from '~/services/storage';

const { BASE_URL } = config;

function appendSearch(url, searchTerm) {
  return (searchTerm.length > 0) ? url.concat(`&_q=${searchTerm}`) : url;
}

function createURL(state) {
  const {
    pageSize,
    pageStart,
    currentSortOption,
    currentSortDirection,
    searchTerm
  } = state;

  const { id } = getStorageUser();

  const sort = currentSortOption.concat(currentSortDirection);
  let url = `${BASE_URL}/articles/feed?appuser=${id}&_limit=${pageSize}&_start=${pageStart}&_sort=${sort}`;
  url = appendSearch(url, searchTerm);
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

  return data;
}

export async function countItems() {
  const { searchTerm } = Store.getState();
  let url = `${BASE_URL}/articles/count?`;
  url = appendSearch(url, searchTerm);

  let count = null;
  try {
    count = await fetch(url)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }

  return count;
}

export async function loadItem({ id }) {
  Store.setState({ isLoading: true });

  let item = null;
  try {
    item = await fetch(`${BASE_URL}/articles/${id}`)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }
  return item;
}

export async function loadOrganisation(id) {
  let item = null;
  try {
    item = await fetch(`${BASE_URL}/organisations/${id}`)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }
  return item;
}

export async function load(itemName) {
  let items = [];

  try {
    items = await fetch(`${BASE_URL}/${itemName}`)
      .then(r => r.json());
  } catch (err) {
    console.log(err);
  }

  return items;
}

export async function sendFeedback(email, text) {
  const body = {
    email,
    text
  };

  const response = await fetch(`${BASE_URL}/feedbacks`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return response;
}

export default {
  loadItems,
  countItems,
  loadItem,
  loadOrganisation,
  load
};
