import React, { useState, useEffect } from "react";
import { ContainerColumn } from "../../../../styles/general";
import { Movie } from "./filmsList.styled";
import MovieMenu from "../../../ui/MovieMenu/MovieMenu";

interface IMovie {
  img: string,
  name: string;
  desc: string;
  category: string;
  year: number;
}


const FilmsItemC = ({name, desc, category, year, img}: IMovie) => {

  return img && (
    <Movie>
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

