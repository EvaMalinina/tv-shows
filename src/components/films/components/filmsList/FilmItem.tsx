import React, { useState, useEffect } from "react";
import { ContainerColumn } from "../../../../styles/general";
import { Movie } from "./filmsList.styled";
import MovieMenu from "../../../ui/MovieMenu/MovieMenu";

interface IMovie {
  title: string;
  poster: string;
  plot: string;
  year: string;
}

interface IFilmItemProps {
  slug: string;
}

const FilmsItemC = ({slug}: IFilmItemProps) => {
  const [movieDetails, setMovieDetails] = useState<IMovie|null>(null);
  const apiBaseURL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/',
    headers = {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "647a93cc65msh50494ccaf2a1f63p19a4dajsnd4639551f841",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      }
    }

  useEffect(() => {
    fetch(apiBaseURL+encodeURI(slug), headers)
      .then(res => res.json())
      .then(({title, poster, plot, year}) =>
        setMovieDetails({title, poster, plot, year})
      ).catch((error) => {
        throw new Error(error)
    });
  }, [])

  return !!movieDetails && (
    <Movie>
      <ContainerColumn>
        <img src={movieDetails.poster} style={{ width: '100%', height: '300px'}} />
        <MovieMenu/>
        <h4>{movieDetails.title}</h4>
        <p>{movieDetails.plot}</p>
        <span>{movieDetails.year}</span>
      </ContainerColumn>
    </Movie>
  )
}

export default FilmsItemC;

