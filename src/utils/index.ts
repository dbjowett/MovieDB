import { DetailedMovie } from '../types';

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const IMDB = ({ imdb_id }: DetailedMovie) => `https://www.imdb.com/title/${imdb_id}`;
