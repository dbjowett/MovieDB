// import actions
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types';
import { getMovies } from '../actions/moviesActions';

interface RootState {
  sideBarOpen: boolean;
  movies: Movie[];
}

const initialState: RootState = {
  sideBarOpen: false,
  movies: [],
};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSidebarOpen(state, { payload }: PayloadAction<boolean>) {
      state.sideBarOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
  },
});

export const moviesReducer = slice.reducer;
