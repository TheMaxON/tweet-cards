import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/api';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';
import PageTitle from 'components/PageTitle/PageTitle';
import { Section } from 'components/Section/Section';
import Loader from 'components/Loader/Loader';
import ErrorScreen from 'components/ErrorScreen/ErrorScreen';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      setIsLoading(true);
      const data = await getTrendingMovies();
      setTrendingMovies(data);
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

  return (
    <>
      <Section>
        <PageTitle title="Trending Today" />
      </Section>
      {isLoading && <Loader />}
      {error && <ErrorScreen error={error} />}
      <Section>
        {!error && trendingMovies.length > 0 && (
          <MoviesList movies={trendingMovies} />
        )}
      </Section>
    </>
  );
};

export default Home;
