import * as React from "react";
import { useState } from "react";
import { FilmsItem, FilmsNav } from "./filmsHeader.styled";

const FilmsNavC = () => {
  const [ categories ] = useState(['all',  'documentary', 'comedy', 'horror', 'crime']);

  return(
    <nav>
      <FilmsNav>
        { categories.map((cat) => {
          return(
            <FilmsItem key={cat}>
              {cat}
            </FilmsItem>
          )
        })}
      </FilmsNav>
    </nav>
  )
}

export default FilmsNavC;
