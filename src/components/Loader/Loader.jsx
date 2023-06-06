import { LoaderBackdrop } from './Loader.styled';
import { Loader } from 'rsuite';

const LoaderComponent = () => {
  return (
    <LoaderBackdrop className="">
      <Loader content="Loading..." center vertical size="lg" />
    </LoaderBackdrop>
  );
};

export default LoaderComponent;
