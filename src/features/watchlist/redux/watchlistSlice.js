import { createSlice } from '@reduxjs/toolkit';

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    watchList: [],
  },
  reducers: {
    addToWatchList(state, action) {
      const movie = action.payload;
      if (!state.watchList.find((m) => m.id === movie.id)) {
        state.watchList.push(movie);
      }
    },
    removeFromWatchList(state, action) {
      const id = action.payload;
      state.watchList = state.watchList.filter((m) => m.id !== id);
    },
    clearWatchList(state) {
      state.watchList = [];
    },
  },
});

export const { addToWatchList, removeFromWatchList, clearWatchList } =
  watchlistSlice.actions;
export default watchlistSlice.reducer;
