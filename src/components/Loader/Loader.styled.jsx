import styled from '@emotion/styled';

export const LoaderBackdrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background: rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(3px);
`;
