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

interface IKeys {
  "x-rapidapi-key": string | undefined;
  "x-rapidapi-host": string | undefined;
}

// having issues for typing of headers
interface IHeaders {
  method: string;
  headers: Headers | string[][] | IKeys | any;
}

const FilmsItemC = ({slug}: IFilmItemProps) => {
  const [movieDetails, setMovieDetails] = useState<IMovie|null>(null);
  const apiBaseURL: string = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/',
         headers: IHeaders = {
            method: "GET",
            headers: {
              "x-rapidapi-key": process.env.XRapidapiKey,
              "x-rapidapi-host": process.env.XRapidapiHost
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

  return movieDetails && (
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

