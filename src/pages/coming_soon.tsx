import Head from 'next/head';
import MovieGrid from '../components/MovieGrid';
import { Movie } from '../types';
import imdb from '../utils/tmdb';

export default function ComingSoon({ movies }: { movies: Movie[] }) {
  return (
    <div>
      <Head>
        <title>Upcoming Movies</title>
        <meta name='description' content='Movies that are being released soon.' />
      </Head>
      <MovieGrid title='Coming Soon' movies={movies} />
    </div>
  );
}

export async function getStaticProps() {
  const date = new Date();
  const todayDate = new Date().toJSON().slice(0, 10);
  const nextweek = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7).toJSON().slice(0, 10);

  const URL = `discover/movie?primary_release_date.gte=${todayDate}&primary_release_date.lte=${nextweek}&region=US`;

  const { data: { results } = {} } = await imdb(URL);

  return {
    props: {
      movies: results,
    },
    revalidate: 600,
  };
}
