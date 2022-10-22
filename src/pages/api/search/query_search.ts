import imdb from '../../../utils/tmdb';

export default async function QuerySearch(req: any, res: any) {
  const { query } = req.query;
  const {
    data: { results },
  } = await imdb(`search/movie?query=${query}`);

  res.status(200).send(JSON.stringify(results));
}
