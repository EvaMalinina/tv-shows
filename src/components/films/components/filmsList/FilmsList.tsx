import React, { useState } from "react";
import FilmItemC from "./FilmItem";
import { ContainerColumn, ContainerRowAlignStart } from  '../../../../styles/general';
import { FilmsQ } from './filmsList.styled';

interface IMovieDetails {
  slug: string;
  genre: string[]
}

export const FilmsListC = () => {

  const [movies] = useState<IMovieDetails[]>([
    {slug: "knocking on heaven's door", genre: ['drama', 'criminal']},
    {slug: "interstellar", genre: ['sci-fi', 'drama']},
    {slug: "city lights", genre: ['comedy']},
    {slug: "matrix", genre: ['sci-fi', 'action']},
    {slug: "Amelie", genre: ['comedy']},
    {slug: "Showshank redemption", genre: ['drama', 'criminal']}
  ]);
  const [q, setQ] = useState<number>(7);

  return (
    <ContainerColumn>
      <FilmsQ><b>{q}</b> films found</FilmsQ>
      <ContainerRowAlignStart>
        {
          movies.map(({slug}) => {
            return(
              <FilmItemC key={slug} slug={slug}/>
            )
          })
        }
      </ContainerRowAlignStart>
    </ContainerColumn>
  );
};

