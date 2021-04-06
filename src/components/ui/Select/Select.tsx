import React, {useState} from 'react';
import {colourSelectStyles} from "../../../styles/theme";
import Select from 'react-select'


type Option = {
  value: string;
  label: string;
};

interface IProps {
  options: Option[],
  onHandleChange: Function
}


const SelectC = ({options, onHandleChange}: IProps) => {

  const [defaultOption, setDefaultOption] = useState<Option | null>(null);

  const pickOption = (selectedOption: Option) => {
    setDefaultOption(selectedOption);
    onHandleChange(selectedOption.value);
  }

  return (
      <Select
          options={options}
          value={defaultOption}
          onChange={selectedOption => {
            selectedOption ? pickOption(selectedOption) : null;
          }}
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
