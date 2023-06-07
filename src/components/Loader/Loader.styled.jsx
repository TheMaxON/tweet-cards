import styled from '@emotion/styled';

export const LoaderBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background: rgba(225, 225, 225, 0.5);
  backdrop-filter: blur(3px);
`;
