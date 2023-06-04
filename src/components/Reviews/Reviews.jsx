import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieReviews } from '../../services/api';
import { Review } from './Reviews.styled';
import SmallLoader from '../Loader/SmallLoader';

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
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

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <SmallLoader />}
      {!isLoading && movieReviews.length === 0 && <p>No reviews yet.</p>}
      {!isLoading &&
        !error &&
        movieReviews.length > 0 &&
        movieReviews.map(({ id, author, content }) => (
          <Review key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </Review>
        ))}
    </>
  );
};

export default Reviews;
