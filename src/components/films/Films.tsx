import * as React from "react";
import { Container, ContainerColumn } from "../../styles/general";
import { FilmsC } from './films.styled';
import FilmsHeaderC from "./components/filmsHeader/FilmsHeader";
import {FilmsListC} from "./components/filmsList/FilmsList";

const Films = ({showEditMoviePopup, showDeleteMoviePopup}) => {
  return (
    <FilmsC>
      <Container>
        <ContainerColumn>
          <FilmsHeaderC/>
          <FilmsListC
            showEditMoviePopup={showEditMoviePopup}
            showDeleteMoviePopup={showDeleteMoviePopup}
          />
        </ContainerColumn>
      </Container>
    </FilmsC>
  );
};

export default Films;
