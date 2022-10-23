import Head from 'next/head';
import MovieGrid from '../components/MovieGrid';
import { Movie } from '../types';
import tmdb from '../utils/tmdb';

export default function PopularPage({ movies }: { movies: Movie[] }) {
  return (
    <div>
      <Head>
        <title>Popular Movies</title>
        <meta name='description' content='Movies that are currently popular.' />
      </Head>
      <MovieGrid title='Popular' movies={movies} />
    </div>
  );
}

export async function getStaticProps() {
  const {
    data: { results },
  } = (await tmdb(`discover/movie`)) as { data: { results: Movie[] } };

  return {
    props: {
      movies: results,
    },
    revalidate: 600,
  };
}
