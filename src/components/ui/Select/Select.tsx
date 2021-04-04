import React, {useState} from 'react';
import {colourSelectStyles} from "../../../styles/theme";
import Select from 'react-select'


type Option = {
  value: string;
  label: string;
};

interface Props {
  options: Option[],
  onHandleChange: Function,
  selectedOption: string
}


const SelectC = ({options, onHandleChange, selectedOption}: Props) => {

  const [defaultOption, setDefaultOption] = useState<Option | null>(null);

  const pickOption = (defaultOption: Option) => {
    setDefaultOption(defaultOption)
    onHandleChange(defaultOption?.value)
  }

  return (
      <Select
          options={options}
          value={{ value: selectedOption, label: selectedOption}}
          onChange={pickOption}
          styles={colourSelectStyles}
          isClearable={false}
          isSearchable={false}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: "#424242",
              primary25: 'hotpink',
            },
          })}
      />
  )
}

export default SelectC;
