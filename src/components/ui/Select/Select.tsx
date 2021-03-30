import React, {useState} from 'react';
import {colourSelectStyles} from "../../../styles/theme";
import Select from 'react-select'


type Option = {
  value: string;
  label: string;
};

interface Props {
  options: Option[];
  onHandleChange: Function;
}


const SelectC = ({options, onHandleChange}: Props) => {

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const pickOption = (selectedOption: Option) => {
    setSelectedOption(selectedOption)
    onHandleChange(selectedOption?.value)
  }

  return (
      <Select
          options={options}
          value={selectedOption}
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
