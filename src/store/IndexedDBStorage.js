import {get, set, del} from 'idb-keyval';

const IndexedDBStorage = {
  getItem: async (name) => {
    const value = await get(name);
    return value ?? null;
  },

  setItem: async (name, value) => {
    await set(name, value);
  },
  removeItem: async (name) => {
    await del(name)
  }
}

export default IndexedDBStorage;