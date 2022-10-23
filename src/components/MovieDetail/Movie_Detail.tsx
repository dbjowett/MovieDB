import Image from 'next/image';
import classes from '../MovieDetail/Movie_Detail.module.scss';
import { FaStar } from 'react-icons/fa';
import { DetailedMovie, Movie } from '../../types';

export default function MovieDetail({ movie }: { movie: DetailedMovie }) {
  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(movie);

  //Format Movie Budget into USD
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  //Construct IMDB link
  const IMDB = `https://www.imdb.com/title/${movie.imdb_id}`;

  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={220} height={320} layout='responsive' alt={movie.original_title} />
      </div>
      <div className={classes.info}>
        <h1>{movie.original_title}</h1>
        <div>{movie.overview}</div>
        <div>{movie.runtime} mins</div>
        <div className={classes.ratingContainer}>
          <div>
            <FaStar />
          </div>
          {movie.vote_average}
        </div>
        <ul className={classes.genreContainer}>
          <h2>Genres</h2>
          {movie.genres.map((genre) => (
            <li key={genre.name}>{genre.name}</li>
          ))}
        </ul>
        {movie.budget ? <div>Budget: {formatter.format(movie.budget)}</div> : <div></div>}
        <div className={classes.btnContainer}>
          <button>
            <a href={movie.homepage} target='_blank' rel='noopener noreferrer'>
              Website
            </a>
          </button>
          <button>
            <a href={IMDB} target='_blank' rel='noopener noreferrer'>
              IMDB
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
