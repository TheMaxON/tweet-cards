import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  StyledMoviesList,
  MoviesListItem,
  MoviesPoster,
  MoviesTitle,
} from './MoviesList.styled';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w400/';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <StyledMoviesList>
      {movies.map(({ id, poster_path, title, original_title }) => (
        <MoviesListItem
          key={id}
          state={{ from: location }}
          to={`/movies/${id}`}
        >
          <MoviesPoster
            src={
              poster_path
                ? IMAGES_BASE_URL + poster_path
                : require('../../media/no-image-placeholder.png')
            }
            loading="lazy"
            alt={title ? title : original_title}
          />
          {<MoviesTitle>{title ? title : original_title}</MoviesTitle>}
        </MoviesListItem>
      ))}
    </StyledMoviesList>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      original_title: PropTypes.string,
    })
  ),
};
