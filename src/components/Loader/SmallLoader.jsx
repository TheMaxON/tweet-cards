import { Bars } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './SmallLoader.styled';
import PageTitle from '../PageTitle/PageTitle';

const SmallLoader = () => {
  return (
    <StyledLoaderWrapper>
      <Bars
        height="200"
        width="200"
        color="var(--color-accent)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <PageTitle title="Loading..." />
    </StyledLoaderWrapper>
  );
};

export default SmallLoader;
