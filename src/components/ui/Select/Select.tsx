import React, { useState, useCallback } from 'react';
import { Select } from 'react-functional-select';
import { Sorting, SelectContainer  } from "./select.styled";
import { theme } from "../../../styles/theme";

type Option = Readonly<{
  id: number;
  type: string;
}>;

const _sortOptions: Option[] = [
  { id: 1, type: 'release date'},
  { id: 2, type: 'more popular'},
  { id: 3, type: 'less popular'},
];

const FilmSorting: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>({ id: 1, type: 'release date'});

  const getOptionValue = useCallback((option: Option): number => option.id, []);
  const onOptionChange = useCallback((option: Option | null): void => setSelectedOption(option), []);
  const getOptionLabel = useCallback((option: Option): string => `${option.type}`, []);

  return (
    <Sorting>
      <label>
        Sort by
        <SelectContainer>
          <Select
            options={_sortOptions}
            onOptionChange={onOptionChange}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            themeConfig={theme}
          />
        </SelectContainer>
      </label>
    </Sorting>
  );
};

export default FilmSorting;
