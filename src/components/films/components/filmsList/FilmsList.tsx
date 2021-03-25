import React, {useCallback, useEffect, useState} from "react";
import FilmItemC from "./FilmItem";
import { ContainerColumn, ContainerRowAlignStart } from  '../../../../styles/general';
import { FilmsQ } from './filmsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDataStart } from "./store/actions";

export const FilmsListC = () => {
  const [q, setQ] = useState<number>(1);
  const [moviesArr, setMoviesArr] = useState<[] | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesDataStart());
  }, []);

  // not sure about this ..
  const movies = useSelector(state => state.moviesReducer.movies);

  useEffect(() => {
    movies && movies.length > 0 ? setMoviesArr(movies) : null;
  }, [movies]);

  const getMoviesQ = useCallback(() => {
   !!moviesArr && moviesArr.length > 0 ? setQ(moviesArr.length) : null;
  }, [moviesArr])


  useEffect(() => {
    getMoviesQ();
  }, [moviesArr])



  return (
    <ContainerColumn>
      <FilmsQ><b>{q}</b> films found</FilmsQ>
      <ContainerRowAlignStart>
        { moviesArr &&
          moviesArr.map(({_id, name, desc, category, year, img, runtime}) => {
            // having ts issue here
            return(
              <FilmItemC
                key={_id}
                movieId={_id}
                name={name}
                desc={desc}
                category={category}
                year={year}
                img={img}
                runtime={runtime}
              />
            )
          })
        }
      </ContainerRowAlignStart>
    </ContainerColumn>
  );
};

