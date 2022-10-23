import Image from 'next/image';
import Link from 'next/link';
import styles from './MovieCard.module.scss';

import { FaStar } from 'react-icons/fa';
import { Movie } from '../../types';

export default function MovieCard({ movie }: { movie: Movie }) {
  const string = movie.original_title.split(' ').join('_');
  const linkPath = `/movie/${string}/${movie.id}`;

  return (
    <li className={styles.container}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={220} height={320} layout='responsive' alt={movie.original_title} />
          </div>
          <div className={styles.info}>
            <h1>{movie.original_title}</h1>
            <div className={styles.info_text}>{movie.overview.slice(0, 200)}</div>
            <div className={styles.rating}>
              <FaStar />
              {movie.vote_average}
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
