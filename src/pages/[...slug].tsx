import { useRouter } from 'next/router';
import useSWR from 'swr';
import Head from 'next/head';
import { TailSpin } from 'react-loader-spinner';

import MovieDetail from '../components/MovieDetail/Movie_Detail';

export default function Movie() {
  const router = useRouter();

  let _id;
  if (router.query.hasOwnProperty('slug')) {
    const { slug } = router.query;
    if (slug) _id = slug[2];
  }

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const URL = `/api/search/id_search/?query=${_id}`;

  const { data, error } = useSWR(URL, fetcher);

  if (!data) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '150px' }}>
        <TailSpin color='#f25d2a' height={80} width={80} />
      </div>
    );
  }

  if (error) {
    return <div>There was an error!</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Head>
        <title>{data?.original_title}</title>
      </Head>
      {data ? <MovieDetail movie={data} /> : <></>}
    </div>
  );
}
