import Head from 'next/head';

import { useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import SearchBar from '../components/SearchBar';

export default function Search() {
  const [movies, setMovies] = useState([]);

  const getQuery = async (query: string) => {
    if (query.length === 0) {
      return;
    }
    const URL = `/api/search/query_search/?query=${query}`;
    const res = await fetch(URL);
    const results = await res.json();
    setMovies(results);
  };

  return (
    <div>
      <Head>
        <title>Search for Movies</title>
        <meta name='description' content='Search for your favourite movies.' />
      </Head>
      <SearchBar getQuery={getQuery} />
      {movies?.length > 0 && <MovieGrid title='Search' movies={movies} />}
    </div>
  );
}
