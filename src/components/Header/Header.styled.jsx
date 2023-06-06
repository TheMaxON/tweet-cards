import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 90%;
  height: 65px;
  background: var(--color-background-secondary);
  display: flex;
  align-items: center;
  padding: 0 50px;
  position: sticky;
  top: 10px;
  left: 5%;
  right: 5%;
  margin-bottom: 30px;
  z-index: 10;
  box-shadow: var(--shadow-component);
  border-radius: 20px;
`;

export const StyledNav = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledNavLink = styled(NavLink)`
  width: 100%;
  height: 35px;
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 10px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-underline-offset: 3px;
    text-decoration-thickness: 3px;
  }

  &.active {
    background: var(--color-primary);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    color: var(--color-text-black);
    text-decoration: none;
  }
`;
