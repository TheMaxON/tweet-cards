import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledNavLink } from './Header/Header.styled';
import Loader from '../components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
