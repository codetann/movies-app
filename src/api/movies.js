import { BaseApi } from "./base";

class Movies extends BaseApi {
  constructor() {
    super();
  }

  async getPopular() {
    return await this.get("/movie/popular");
  }

  async getTopRated() {
    return await this.get("/movie/top_rated");
  }

  async getUpcoming() {
    return await this.get("/movie/upcoming");
  }

  async getNowPlaying() {
    return await this.get("/movie/now_playing");
  }

  async getGenres() {
    return await this.get("/genre/movie/list");
  }

  async getMovieById(id) {
    return await this.get(`/movie/${id}`);
  }
}

export const movies = new Movies();
