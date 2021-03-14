import React from "react";
import { SelectContainer, Sorting } from "./filmsHeader.styled";
import SelectC from "../../../ui/Select/Select";

type Option = {
  id: number;
  type: string;
};

const _sortOptions: Option[] = [
  { id: 1, type: 'release date'},
  { id: 2, type: 'more popular'},
  { id: 3, type: 'less popular'},
];

const FilmsSorting = () => {
  return(
    <Sorting>
      <label>
        Sort by
        <SelectContainer>
          <SelectC options={_sortOptions}/>
        </SelectContainer>
      </label>
    </Sorting>
  )
}

export default FilmsSorting;
