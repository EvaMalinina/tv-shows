import * as React from "react";
import { useState } from "react";
import { Sorting } from "./filmsHeader.styled";

const FilmsSortC = () => {
  const [ sortByValue, setSortByValue ] = useState('release date');

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSortByValue(e.target.value)
  };

  return(
    <Sorting>
      <label>
        Sort by
        <select value={sortByValue} onChange={handleChange}>
          <option value="release date">release date</option>
          <option value="more popular">more popular</option>
          <option value="less popular">less popular</option>
        </select>
      </label>
    </Sorting>
  )
}

export default FilmsSortC;
