import * as React from "react";
import { useState } from "react";
import { FilmsItem, FilmsNav } from "./filmsHeader.styled";

const FilmsNavC = () => {
  const [ categories ] = useState<string[]>(['all',  'documentary', 'comedy', 'horror', 'crime']);

  return(
    <nav>
      <FilmsNav>
        { categories.map(cat => (
            <FilmsItem key={cat}>
              {cat}
            </FilmsItem>
          )
        )}
      </FilmsNav>
    </nav>
  )
}

export default FilmsNavC;
