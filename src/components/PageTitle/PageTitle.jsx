import { Title } from './PageTitle.styled';
import { PropTypes } from 'prop-types';

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string,
};
