import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledNavLink } from './Header/Header.styled';
import LoaderComponent from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/tweets">Tweets</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <main>
        <Suspense fallback={<LoaderComponent />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
