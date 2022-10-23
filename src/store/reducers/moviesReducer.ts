// import actions
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMovies } from '../actions/moviesActions';

interface RootState {
  sideBarOpen: boolean;
}

const initialState: RootState = {
  sideBarOpen: false,
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
    builder.addCase(getMovies.fulfilled, (state, action) => {
      // code here
    });
  },
});

export const moviesReducer = slice.reducer;
