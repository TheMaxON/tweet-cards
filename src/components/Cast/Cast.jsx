import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCast } from '../../services/api';
import {
  CastMemberWrapper,
  CastMember,
  CastMemberPhoto,
  CastMemberInfo,
  CastMemberName,
  CastMemberRole,
} from './Cast.styled';
import SmallLoader from '../Loader/SmallLoader';
import ErrorScreen from '../ErrorScreen/ErrorScreen';

const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        setMovieCast(data);
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

    fetchMovieCast();
  }, [movieId]);

  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  return (
    <CastMemberWrapper>
      {isLoading && <SmallLoader />}
      {!isLoading && movieCast.length === 0 && <p>No cast info yet.</p>}
      {error && <ErrorScreen error={error} />}
      {!isLoading &&
        movieCast.length > 0 &&
        !error &&
        movieCast.map(({ cast_id, name, character, profile_path }) => (
          <CastMember key={cast_id}>
            <CastMemberPhoto
              src={
                profile_path
                  ? IMAGES_BASE_URL + profile_path
                  : require('../../media/no-image-placeholder.png')
              }
              loading="lazy"
              alt={name}
            />

            <CastMemberInfo>
              <CastMemberName>{name}</CastMemberName>
              <CastMemberRole>
                {character ? `as ${character}` : ''}
              </CastMemberRole>
            </CastMemberInfo>
          </CastMember>
        ))}
    </CastMemberWrapper>
  );
};

export default Cast;
