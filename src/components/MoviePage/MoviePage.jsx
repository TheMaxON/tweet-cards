import { Suspense, useRef } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Section } from 'components/Section/Section';
import {
  MovieInfoSection,
  MoviePoster,
  MovieDetails,
  Subheading,
  Text,
  MovieAdditionalDetails,
  BackButton,
} from './MoviePage.styled';
import PageTitle from 'components/PageTitle/PageTitle';
import { StyledNav, StyledNavLink } from '../Header/Header.styled';
import Loader from '../Loader/Loader';

const MoviePage = ({ movieInfo }) => {
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const { poster_path, title, original_title, vote_average, overview, genres } =
    movieInfo;
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  return (
    <>
      <Section>
        <BackButton to={backLinkRef.current}>⨞ Go back</BackButton>
      </Section>
      <Section>
        <MovieInfoSection>
          <MoviePoster
            src={
              poster_path
                ? IMAGES_BASE_URL + poster_path
                : require('../../media/no-image-placeholder.png')
            }
            alt={title}
          />
          <MovieDetails>
            <PageTitle title={title ? title : original_title} />
            <Text>User score: {Math.round(vote_average * 10) / 10}</Text>
            <Subheading>Overview</Subheading>
            <Text>{overview ? overview : 'No overview yet...'}</Text>
            <Subheading>Genres</Subheading>
            <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
            <MovieAdditionalDetails>
              <Subheading>
                Details about <i>{title ? title : original_title}</i>
              </Subheading>
              <StyledNav>
                <StyledNavLink to="cast">Cast</StyledNavLink>
                <StyledNavLink to="reviews">Reviews</StyledNavLink>
              </StyledNav>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </MovieAdditionalDetails>
          </MovieDetails>
        </MovieInfoSection>
      </Section>
    </>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
  }),
};
