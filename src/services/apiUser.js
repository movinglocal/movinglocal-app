import fetch from 'unfetch';

import { Store } from '~/Store';

const { BASE_URL } = config;

export async function updateRelation(relationName, ids) {
  const idArray = Array.isArray(ids) ? ids : [ids];
  const { userId } = Store.getState();

  try {
    const response = await fetch(`${BASE_URL}/appusers/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ [relationName]: idArray })
    });
    const json = await response.json();

    return json;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export async function createUser() {
  try {
    const response = await fetch(`${BASE_URL}/appusers`, { method: 'POST' });
    const user = await response.json();

    return user;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export async function getUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/appusers/${id}`, { method: 'GET' });
    const user = await response.json();

    return user;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export async function updatePosition(params) {
  const { userId } = Store.getState();

  const location = params.userPosition
    ? { data: { location: [params.userPosition[1], params.userPosition[0]] } }
    : { data: {} };

  const data = { ...location };

  if (params.userPositionRadius) {
    data.radius = params.userPositionRadius;
  }

  try {
    const response = await fetch(`${BASE_URL}/appusers/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();

    return json;
  } catch (err) {
    console.log(err);

    return null;
  }
}

export default {
  createUser,
  getUser,
  updateRelation,
  updatePosition
};
