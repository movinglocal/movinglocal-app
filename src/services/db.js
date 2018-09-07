import Dexie from 'dexie';

const DB_NAME = 'movinglocal';

const db = new Dexie(DB_NAME);

db.version(1).stores({
  favs: '+id, name'
});

export default db.favs;
