class Storage {
  #storage = window.localStorage;

  constructor(key) {
    this.key = key;

    if (!this.#storage.getItem(this.key)) {
      this.#storage.setItem(this.key, JSON.stringify({}));
    }
  }

  get(key) {
    const data = JSON.parse(this.#storage.getItem(this.key) || "{}");

    return data[key] ? data[key].value : null;
  }

  getAll() {
    const data = JSON.parse(this.#storage.getItem(this.key) || "{}");

    return data;
  }

  set(key, value) {
    const data = JSON.parse(this.#storage.getItem(this.key) || "{}");

    data[key] = value;

    this.#storage.setItem(this.key, JSON.stringify(data));
  }

  remove(key) {
    const data = JSON.parse(this.#storage.getItem(this.key) || "{}");

    delete data[key];

    this.#storage.setItem(this.key, JSON.stringify(data));
  }

  clear() {
    this.#storage.removeItem(this.key);
  }

  has(key) {
    const data = JSON.parse(this.#storage.getItem(this.key) || "{}");

    return !!data[key];
  }
}

export { Storage };
