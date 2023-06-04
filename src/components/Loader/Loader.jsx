import { Bars } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';
import PageTitle from '../PageTitle/PageTitle';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <Bars
        height="300"
        width="300"
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

export default Loader;
