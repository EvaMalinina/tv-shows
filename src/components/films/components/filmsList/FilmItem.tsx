import React, { useState, useEffect } from "react";
import { ContainerColumn } from "../../../../styles/general";
import { Movie } from "./filmsList.styled";
import MovieMenu from "../../../ui/MovieMenu/MovieMenu";

interface IMovie {
  name: string,
  desc: string,
  category: string,
  year: number,
  img: string,
}


const FilmsItemC = ({name, desc, category, year, img, showEditMoviePopup}: IMovie) => {

  return img && (
    <Movie>
      <ContainerColumn>
        <img src={img} style={{ width: '100%', height: '300px'}} />
        <MovieMenu showEditMoviePopup={showEditMoviePopup}/>
        <h4 style={{textTransform: "capitalize"}}>{name}</h4>
        <p>{desc}</p>
        <span>{year}</span>
      </ContainerColumn>
    </Movie>
  )
}

export default FilmsItemC;

