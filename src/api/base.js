export class BaseApi {
  endpoint = "https://api.themoviedb.org/3";

  #cacheResponse = (url, data) => {
    const cache = JSON.parse(localStorage.getItem("cache")) || {};
    cache[url] = data;
    localStorage.setItem("cache", JSON.stringify(cache));
  };

  #getCachedResponse = (url) => {
    const cache = JSON.parse(localStorage.getItem("cache")) || {};
    return cache[url];
  };

  async get(url) {
    const cachedResponse = this.#getCachedResponse(url);
    if (cachedResponse) {
      return cachedResponse;
    }

    const response = await fetch(
      `${this.endpoint}${url}?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();

    this.#cacheResponse(url, data);

    return data;
  }
}
