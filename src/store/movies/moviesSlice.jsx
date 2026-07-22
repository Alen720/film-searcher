import { createSlice } from "@reduxjs/toolkit";
import { searchMovies } from "./api";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    search: "",
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = "Not Found";
      });
  },
});

export const { setSearch } = moviesSlice.actions;
export default moviesSlice.reducer;