export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  runtime: number;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Genre {
  id: number;
  name: string;
}

interface Company {
  id: number;
  logo_path: string;
  name: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface Collection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}

export interface DetailedMovie extends Movie {
  belongs_to_collection: Collection;
  production_companies: Company[];
  production_countries: Country[];
  budget: number;
  homepage: string;
  genres: Genre[];
  revenue: number;
  status: string;
  imdb_id: string;
  tagline: string;
}
