import React from "react";
import { ContainerColumn } from "../../../../styles/general";
import { Movie } from "./filmsList.styled";
import MovieMenu from "../../../ui/MovieMenu/MovieMenu";
import {actionControlVisibility, useDispatch} from "../../../../context/modalMovieContext";

interface IMovie {
  name: string,
  desc: string,
  category: string,
  year: number,
  img: string,
}


const FilmsItemC = ({name, desc, category, year, img}: IMovie) => {
  const dispatch = useDispatch(),
      onFilmOverviewOpen = () => dispatch(
          actionControlVisibility('filmOverview', true)
      )

  return name && (
    <Movie onClick={onFilmOverviewOpen}>
      <ContainerColumn>
        <img src={img} style={{ width: '100%', height: '300px'}} />
        <MovieMenu/>
        <h4 style={{textTransform: "capitalize"}}>{name}</h4>
        <p>{desc}</p>
        <span>{year}</span>
      </ContainerColumn>
    </Movie>
  )
}

export default FilmsItemC;

