import { FilterDropdown, FilterDropdownOption } from './FilterTweets.styled';

const FilterTweets = setFilterOption => {
  return (
    <FilterDropdown title="Filter">
      <FilterDropdownOption>Show all</FilterDropdownOption>
      <FilterDropdownOption>Follow</FilterDropdownOption>
      <FilterDropdownOption>Followings</FilterDropdownOption>
    </FilterDropdown>
  );
};

export default FilterTweets;
