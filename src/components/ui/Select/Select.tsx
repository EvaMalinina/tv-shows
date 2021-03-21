import React, {useCallback} from 'react';
import { Select } from 'react-functional-select';
import { theme } from "../../../styles/theme";
import { SelectWrapper } from './select.styled';

type Option = {
  id: number;
  type: string;
};


interface Props {
  options: Option[];
  onHandleChange: Function;
}


const SelectC = ({options, onHandleChange}: Props) => {
  // const [ selectedOption, setSelectedOption] = useState<Option | null>({ id: 1, type: 'release date'});

  const getOptionValue = useCallback((option: Option): number => option.id, []);
  const onOptionChange = useCallback((option: Option | null): void => onHandleChange(option), []);
  const getOptionLabel = useCallback((option: Option): string => `${option.type}`, []);

  return(
    <SelectWrapper>
      <Select
        options={options}
        onOptionChange={onOptionChange}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        themeConfig={theme}
      />
    </SelectWrapper>
  )
}

export default SelectC;
