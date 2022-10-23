import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../../types';
import tmdb from '../../utils/tmdb';

export const getMovies = createAsyncThunk<Movie[]>('getMovies/', async () => {
  const res = await tmdb(`discover/movie`);
  return res.data;
});
