import React from "react";
import { ContainerSpaceBetween } from "../../../../styles/general";
import { FilmsHeader } from "./filmsHeader.styled";
import FilmsNavC from "./FilmsNav";
import FilmsSortC from "./FilmsSort";

const FilmsHeaderC = () => {
  return(
    <FilmsHeader>
      <ContainerSpaceBetween>
        <FilmsNavC/>
        <FilmsSortC/>
      </ContainerSpaceBetween>
    </FilmsHeader>
  )
}

export default FilmsHeaderC;
