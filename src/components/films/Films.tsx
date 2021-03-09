import * as React from "react";
import { Container, ContainerColumn } from "../../styles/general";
import { FilmsC } from './films.styled';
import FilmsHeaderC from "./components/filmsHeader/FilmsHeader";
import {FilmsListC} from "./components/filmsList/FilmsList";

const Films = ({showEditMoviePopup}) => {
  return (
    <FilmsC>
      <Container>
        <ContainerColumn>
          <FilmsHeaderC/>
          <FilmsListC showEditMoviePopup={showEditMoviePopup}/>
        </ContainerColumn>
      </Container>
    </FilmsC>
  );
};

export default Films;
