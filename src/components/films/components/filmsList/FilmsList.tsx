import React, {useEffect, useState} from "react";
import FilmItemC from "./FilmItem";
import { ContainerColumn, ContainerRowAlignStart } from  '../../../../styles/general';
import { FilmsQ } from './filmsList.styled';
import axios from "axios";

export const FilmsListC = ({showEditMoviePopup}) => {
  const [q, setQ] = useState<number>(7);
  const [moviesArr, setMoviesArr] = useState<[] | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/movies`)
      .then(res => {
        const movies = res.data;
        setMoviesArr(movies);
      }).catch((err) => {
        alert('There is a problem during fetching the data from database: '+ err)
      })
  }, []);


  return (
    <ContainerColumn>
      <FilmsQ><b>{q}</b> films found</FilmsQ>
      <ContainerRowAlignStart>
        { moviesArr &&
          moviesArr.map(({name, desc, category, year, img}) => {
            return(
              <FilmItemC
                key={name}
                name={name}
                desc={desc}
                category={category}
                year={year}
                img={img}
                showEditMoviePopup={showEditMoviePopup}
              />
            )
          })
        }
      </ContainerRowAlignStart>
    </ContainerColumn>
  );
};

