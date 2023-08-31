import { Cache } from "../lib/cache";

export class BaseApi {
  endpoint = "https://api.themoviedb.org/3";
  cache = new Cache("tmdb");

  async get(url) {
    const cachedResponse = this.cache.get(url);

    if (cachedResponse) {
      return cachedResponse;
    }

    const response = await fetch(
      `${this.endpoint}${url}?api_key=${import.meta.env.VITE_API_KEY}`
    );
    const data = await response.json();

    this.cache.set(url, data);

    return data;
  }
}
