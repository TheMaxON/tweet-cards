import { FilterDropdown, FilterDropdownOption } from './FilterTweets.styled';

const FilterTweets = ({ changeFilterOption }) => {
  return (
    <FilterDropdown title="Filter">
      <FilterDropdownOption onClick={() => changeFilterOption(null)}>
        Show all
      </FilterDropdownOption>
      <FilterDropdownOption onClick={() => changeFilterOption(false)}>
        Follow
      </FilterDropdownOption>
      <FilterDropdownOption onClick={() => changeFilterOption(true)}>
        Followings
      </FilterDropdownOption>
    </FilterDropdown>
  );
};

export default FilterTweets;
