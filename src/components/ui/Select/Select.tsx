import React, {useState} from 'react';
import {colourSelectStyles} from "../../../styles/theme";
import Select from 'react-select'


type Option = {
  value: string;
  label: string;
};

interface IProps {
  options: Option[],
  onHandleChange: Function,
  selectedGenre: string
}


const SelectC = ({options, onHandleChange, selectedGenre}: IProps) => {

  const [defaultOption, setDefaultOption] = useState<Option | null>({value: selectedGenre, label: selectedGenre});

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
