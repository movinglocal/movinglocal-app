import store from 'store';
import { createUser, getUser } from '~/services/apiUser';

const STORE_PREFIX = 'molo:';
const USER_STORE_ITEM = `${STORE_PREFIX}user`;

// for developing/ testing purposes
window.store = store;

export function reset() {
  store.remove(USER_STORE_ITEM);
  window.location.reload();
}

export function getStorageUser() {
  return store.get(USER_STORE_ITEM);
}

export async function initUser() {
  const storageUser = getStorageUser();
  const isInitial = typeof storageUser === 'undefined' || storageUser.isInitial;

  if (!isInitial) {
    const user = await getUser(storageUser.id);
    if (user.id) {
      return { ...user, isInitial: false };
    }
  }

  const user = await createUser();
  const storageUserData = { isInitial: true, id: user.id };
  store.set(USER_STORE_ITEM, storageUserData);

  return { ...user, isInitial: true };
}

export async function updateUser(changes) {
  const storageUser = store.get(USER_STORE_ITEM);
  const changedStorageUser = { ...storageUser, ...changes };
  store.set(USER_STORE_ITEM, changedStorageUser);

  return changedStorageUser;
}

export default {
  initUser,
  updateUser,
  getStorageUser,
  reset
};
