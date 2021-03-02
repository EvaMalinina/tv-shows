import React, { useState } from "react";
import FilmItemC from "./FilmItem";
import { ContainerColumn, ContainerRowAlignStart } from  '../../../../styles/general';
import { FilmsQ } from './filmsList.styled';


const FilmsListC = () => {

  const movies = [
    {slug: "knocking on heaven's door", genre: ['drama', 'criminal']},
    {slug: "interstellar", genre: ['sci-fi', 'drama']},
    {slug: "city lights", genre: ['comedy']},
    {slug: "matrix", genre: ['sci-fi', 'action']},
    {slug: "Amelie", genre: ['comedy']},
    {slug: "Showshank redemption", genre: ['drama', 'criminal']}
  ]
  const [q, setQ] = useState<number>(7)

  return (
    <ContainerColumn>
      <FilmsQ><b>{q}</b> films found</FilmsQ>
      <ContainerRowAlignStart>
        {
          movies.map(({slug}) => {
            return(
              // having trouble to solve this ts error
              <FilmItemC key={slug} slug={slug}/>
            )
          })
        }
      </ContainerRowAlignStart>
    </ContainerColumn>
  );
};

export default FilmsListC;
