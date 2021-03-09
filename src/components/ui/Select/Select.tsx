import React, { useState, useCallback } from 'react';
import { Select } from 'react-functional-select';
import { theme } from "../../../styles/theme";

type Option = {
  id: number;
  type: string;
};

interface Props {
  options: Option[];
}

const SelectC = ({options}: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>({ id: 1, type: 'release date'});

  const getOptionValue = useCallback((option: Option): number => option.id, []);
  const onOptionChange = useCallback((option: Option | null): void => setSelectedOption(option), []);
  const getOptionLabel = useCallback((option: Option): string => `${option.type}`, []);

  return(
    <Select
      options={options}
      onOptionChange={onOptionChange}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      themeConfig={theme}
    />
  )
}

export default SelectC;
