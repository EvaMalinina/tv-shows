import React, {useState} from "react";
import { SelectContainer, Sorting } from "./filmsHeader.styled";
import SelectC from "../../../ui/Select/Select";
import {useDispatch} from "react-redux";
import {filterMovies, sortMovies} from "./store/actions";


type Option = {
  value: string;
  label: string;
};

const _sortOptions: Option[] = [
  { value: 'release date', label: 'release date'},
  { value: 'A - Z', label: 'A - Z'},
];

const FilmsSorting = () => {

  const [sortBy, setSortBy] = useState<string>('release date');
  const dispatch = useDispatch();

  const handleChange = (val: string) => {
    setSortBy(val);
    dispatch(sortMovies(val));
  }

  return(
    <Sorting>
      <label>
        Sort by
        <SelectContainer>
          <SelectC
              selectedOption={sortBy}
              options={_sortOptions}
              onHandleChange={(val: string) => handleChange(val)}
          />
        </SelectContainer>
      </label>
    </Sorting>
  )
}

export default FilmsSorting;
