import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "./store/movies/api";
import { setSearch } from "./store/movies/moviesSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { search, items, loading, error } = useSelector(
    (state) => state.movies,
  );

  const handleSearch = () => {
    if (!search) return;
    dispatch(searchMovies(search));
  };

  return (
    <div className="App">
      <div className="search-form">
        <input
          className="search-input"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          placeholder="search film"
        />
        <button className="search-button" onClick={handleSearch}>
          find
        </button>
      </div>

      {loading && <p className="status-text">loading...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="movies-list">
        {items?.map((movie) => (
          <div className="movie-item" key={movie.imdbID}>
            <img className="movie-poster" src={movie.Poster} alt="Poster" />
            <h1 className="movie-title">
              {movie.Title} ({movie.Year})
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
