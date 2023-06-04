import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 80px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 140px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1750px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const MoviesListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const MoviesPoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const MoviesTitle = styled.h2`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: var(--color-text);
  padding: 13px;
  font-size: 16px;
  background-color: #01000adb;
  backdrop-filter: blur(15px);

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
