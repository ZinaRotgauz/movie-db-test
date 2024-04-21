export default class TmdbService {
  _baseUrl = "https://api.themoviedb.org/3/";
  _apiKey = "7cbf8d07a0c09237c3c08d8e5127fd63";
  _lang = "en-US";

  _linkFilms = `movie/now_playing?api_key=${this._apiKey}&language=${this._lang}`;
  _movieDetail = "movie/";
  _movieReviews = "movie/reviews"

  _getMovies = async () => {
    const response = await fetch(this._baseUrl + this._linkFilms);
    return await response.json();
  };

  _getMovieDetails = async (movieId) => {
    const response = await fetch(
      this._baseUrl +
        this._movieDetail +
        movieId +
        `?api_key=${this._apiKey}&language=${this._lang}`
    );
    return await response.json();
  };

  _getMovieReviews = async (movieId, page) => {
    const response = await fetch(
      this._baseUrl +
        this._movieDetail +
        movieId +
        `/reviews?api_key=${this._apiKey}&language=${this._lang}`
    );

    return await response.json();
  };
}
