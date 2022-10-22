import { Movie } from '../../types/types';
import MovieCard from '../MovieCard';
import styles from './MovieGrid.module.scss';

export default function MovieGrid({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <div>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.grid}>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
