class Cache {
  constructor(key) {
    this.key = key;
    this.storage = window.localStorage;

    if (!this.storage.getItem(this.key)) {
      this.storage.setItem(this.key, JSON.stringify({}));
    }
  }

  #getCache() {
    const cache = JSON.parse(this.storage.getItem(this.key) || "{}");

    Object.keys(cache).forEach((key) => {
      if (cache[key].expiresAt < Date.now()) {
        delete cache[key];
      }
    });

    this.#setCache(cache);

    return cache;
  }

  #setCache(cache) {
    this.storage.setItem(this.key, JSON.stringify(cache));
  }

  get(key) {
    const cache = this.#getCache();

    if (cache[key]) {
      return cache[key].value;
    }

    return null;
  }

  getAll() {
    const cache = this.#getCache();

    return cache;
  }

  set(key, value, expiresAt = 1000 * 60 * 60 * 24) {
    const cache = this.#getCache();

    cache[key] = {
      id: key,
      value,
      expiresAt: Date.now() + expiresAt,
    };

    this.#setCache(cache);

    return;
  }

  remove(key) {
    const cache = this.#getCache();

    if (!cache[key]) {
      return;
    }

    delete cache[key];

    this.#setCache(cache);
  }

  clear() {
    this.#setCache({});
  }

  has(key) {
    const cache = this.#getCache();

    return !!cache[key];
  }
}

export { Cache };
