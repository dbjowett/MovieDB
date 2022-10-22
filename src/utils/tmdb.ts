import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  params: {
    api_key: process.env.MOVIEDB_KEY,
  },
});

export const ImgBaseURL = 'https://image.tmdb.org/t/p/';
