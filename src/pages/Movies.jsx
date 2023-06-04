import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Section } from 'components/Section/Section';
import PageTitle from '../components/PageTitle/PageTitle';
import Search from '../components/Search/Search';
import { getSearchedMovies } from '../services/api';
import MoviesList from '../components/MoviesList/MoviesList';
import Loader from '../components/Loader/Loader';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      const fetchSearchedMovies = async () => {
        try {
          setIsLoading(true);
          const data = await getSearchedMovies(query);
          setSearchedMovies(data);
          if (data.length === 0) {
            return toast.info('No movies found', {
              theme: 'dark',
            });
          }
        } catch (error) {
          toast.error('The error has occured. Error info: ', error, {
            theme: 'dark',
          });
          console.log(error);
          return setError(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchSearchedMovies();
    }
  }, [query]);

  const onSumbit = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <Section>
        <PageTitle title="Search Movies" />
      </Section>
      <Section>
        <Search onSubmit={onSumbit} />
      </Section>
      {isLoading && <Loader />}
      {error && <ErrorScreen error={error} />}
      {!error && searchedMovies.length > 0 && (
        <Section>
          <MoviesList movies={searchedMovies} />
        </Section>
      )}
    </>
  );
};

export default Movies;
