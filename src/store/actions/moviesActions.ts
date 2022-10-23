import { createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../../utils/tmdb';

export const getMovies = createAsyncThunk<void>('getMovies/', async () => {
  const res = await tmdb(`discover/movie`);
  return res.data;
});
