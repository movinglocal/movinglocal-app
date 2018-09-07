import Dexie from 'dexie';

const DB_NAME = 'movinglocal';

const db = new Dexie(DB_NAME);

db.version(1).stores({
  favs: 'id,name'
});

export async function addFav(fav) {
  try {
    await db.favs.add(fav);
  } catch (err) {
    console.log('Error saving to the IndexedDB:', err);
  }
}

export async function getFavs() {
  let favs = null;
  try {
    favs = await db.favs.toArray();
  } catch (err) {
    console.log('Error accessing IndexedDB:', err);
  }
  return { favs };
}

export async function removeFav(id) {
  try {
    await db.favs.delete(id);
  } catch (err) {
    console.log('Error deleting entry from IndexedDB:', err);
  }

  return this.getFavs();
}

export default db.favs;
