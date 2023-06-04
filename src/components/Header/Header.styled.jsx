import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  background-color: var(--color-secondary);
  border-bottom: 1px solid var(--color-primary);
  display: flex;
  align-items: center;
  padding: 0 50px;
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const StyledNav = styled.nav`
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--color-primary);
  border-radius: 50px;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 35px;
  color: var(--color-text);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: var(--color-accent);
    color: var(--color-text);
  }
`;
