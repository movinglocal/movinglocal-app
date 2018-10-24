import Dexie from 'dexie';

const db = new Dexie(config.DB_NAME);

db.version(1).stores({
  favs: 'id,name',
  sources: 'id,active'
});

export async function add(collection, fav) {
  try {
    await db[collection].add(fav);
  } catch (err) {
    console.log('Error saving to the IndexedDB:', err);
  }
}

export async function get(collection) {
  let favs = null;
  try {
    favs = await db[collection].toArray();
  } catch (err) {
    console.log('Error accessing IndexedDB:', err);
  }
  return favs;
}

export async function remove(collection, id) {
  try {
    await db[collection].delete(id);
  } catch (err) {
    console.log('Error deleting entry from IndexedDB:', err);
  }

  return get(collection);
}

export default {
  db,
  add,
  get,
  remove
};
