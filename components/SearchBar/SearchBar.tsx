import { useState, useEffect } from 'react';
import styles from '../SearchBar/Searchbar.module.scss';

export default function SearchBar({ getQuery }: any) {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const onChange = (e: any) => {
    const query = e.target.value;
    setQuery(query);
  };

  //Debounce search query
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [query]);

  // Call API when query has been debounced
  useEffect(() => {
    getQuery(debouncedQuery);
  }, [debouncedQuery]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (debouncedQuery.length === 0) {
      return;
    }
    setQuery('');
    getQuery(debouncedQuery);
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={onSubmit}>
        <input className={styles.searchBar} type='text' onChange={onChange} value={query} placeholder='Search for movies'></input>
      </form>
    </div>
  );
}
