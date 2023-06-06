import styled from '@emotion/styled';
import { Dropdown } from 'rsuite';

export const FilterDropdown = styled(Dropdown)`
  background: var(--color-primary);
  border-radius: 10.3108px;
  border: 2px solid var(--color-secondary);
  box-shadow: var(--shadow-component);
  margin: 0 20px 15px 20px;
  font-size: 15px;
`;

export const FilterDropdownOption = styled(Dropdown.Item)`
  &:hover {
    background: var(--color-secondary);
    color: var(--color-primary);
  }
`;
