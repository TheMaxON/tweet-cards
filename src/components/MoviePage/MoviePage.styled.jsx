import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieInfoSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }
`;

export const MoviePoster = styled.img`
  width: 70%;
  border-radius: 10px;
  margin: auto;

  @media (min-width: 768px) {
    width: auto;
    height: 80vh;
    margin: 0;
  }
`;

export const MovieDetails = styled.div`
  width: 100%;
  color: var(--color-text);
  overflow: hidden;

  @media (min-width: 768px) {
    width: 1200px;
  }
`;

export const Subheading = styled.h2`
  font-size: 30px;

  @media (min-width: 1200px) {
    font-size: 37px;
  }
`;

export const Text = styled.p`
  margin: 15px 0;
  font-size: 18px;
  padding: 8px 10px 15px 10px;
  border-bottom: 2px solid var(--color-primary);
`;

export const MovieAdditionalDetails = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden auto;
  border-radius: 15px;
  background-color: var(--color-secondary);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  ::-webkit-scrollbar {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-accent);
  }

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const BackButton = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  background-color: var(--color-primary);
  padding: 10px 20px;
  border-radius: 10px;
`;
