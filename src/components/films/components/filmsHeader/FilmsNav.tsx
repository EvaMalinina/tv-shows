import * as React from "react";
import { useState } from "react";
import { FilmsItem, FilmsNav } from "./filmsHeader.styled";
import {useDispatch} from "react-redux";
import {filterMovies} from "./store/actions";

const FilmsNavC = () => {
  const [ categories ] = useState<string[]>(['all',  'documentary', 'comedy', 'horror', 'crime']);

  const dispatch = useDispatch();
  const filterFilms = (cat: string, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(filterMovies(cat))
  }

  return(
    <nav>
      <FilmsNav>
        { categories.map(cat => (
            <FilmsItem
                key={cat}
                onClick={(e) => filterFilms(cat, e)}
            >
              {cat}
            </FilmsItem>
          )
        )}
      </FilmsNav>
    </nav>
  )
}

export default FilmsNavC;
