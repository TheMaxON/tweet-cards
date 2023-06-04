import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMovieInfo } from '../services/api';
import MoviePage from 'components/MoviePage/MoviePage';
import Loader from '../components/Loader/Loader';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieInfo(movieId);
        setMovieInfo(data);
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
    fetchMovieInfo();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorScreen error={error} />}
      {!error && !isLoading && <MoviePage movieInfo={movieInfo} />}
    </>
  );
};

export default MovieDetails;
