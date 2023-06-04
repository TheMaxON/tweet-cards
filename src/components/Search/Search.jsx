import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { toast } from 'react-toastify';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Form, Button, Input } from './Search.styled';

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const normalizedQuery = query.toLowerCase().trim();

    if (normalizedQuery === '') {
      return toast.info("Please enter the movie you're looking for", {
        theme: 'dark',
      });
    }
    onSubmit(normalizedQuery);
    setQuery('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit" aria-label="Search" className="button">
        <BiSearchAlt2 style={{ width: 25, height: 25 }} />
      </Button>

      <Input
        className="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
    </Form>
  );
};

export default Search;

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
