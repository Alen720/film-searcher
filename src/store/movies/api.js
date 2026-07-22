import { createAsyncThunk } from "@reduxjs/toolkit";

const API = process.env.REACT_APP_OMDB_API_KEY;

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (title) => {
    const result = await fetch(
      `https://www.omdbapi.com/?apikey=${API}&s=${title}`
    );
    const res = await result.json();
    return res.Search;
  }
);