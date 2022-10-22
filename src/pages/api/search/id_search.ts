import imdb from '../../../utils/tmdb';

export default async function IdSearch(req: any, res: any) {
  const { query } = req.query;
  const { data } = await imdb(`movie/${query}`);

  res.status(200).send(JSON.stringify(data));
}
