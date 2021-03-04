import React from "react";
import { ContainerSpaceBetween } from "../../../../styles/general";
import { FilmsHeader } from "./filmsHeader.styled";
import FilmsNavC from "./FilmsNav";
import FilmSorting from "../../../ui/Select/Select";

const FilmsHeaderC = () => {
  return(
    <FilmsHeader>
      <ContainerSpaceBetween>
        <FilmsNavC/>
        <FilmSorting/>
      </ContainerSpaceBetween>
    </FilmsHeader>
  )
}

export default FilmsHeaderC;
