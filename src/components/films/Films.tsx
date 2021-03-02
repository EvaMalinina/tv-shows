import * as React from "react";
import { Container, ContainerColumn } from "../../styles/general";
import { FilmsC } from './films.styled';
import FilmsHeaderC from "./components/filmsHeader/FilmsHeader";
import FilmsListC from "./components/filmsList/FilmsList";
import ErrorBoundary from "./components/filmsList/ErrorBoundary";

const Films = () => {
  return (
    <FilmsC>
      <Container>
        <ContainerColumn>
          <FilmsHeaderC/>
          <ErrorBoundary>
            <FilmsListC/>
          </ErrorBoundary>
        </ContainerColumn>
      </Container>
    </FilmsC>
  );
};

export default Films;
