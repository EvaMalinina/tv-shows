import React, {useCallback, useEffect, useState} from "react";
import FilmItemC from "./FilmItem";
import { ContainerColumn, ContainerRowAlignStart } from  '../../../../styles/general';
import { FilmsQ } from './filmsList.styled';
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDataStart } from "./store/actions";
import {IMovie} from "../../../../store/interfaces";

export const FilmsListC = () => {
  const [q, setQ] = useState<number>(0);
  const [moviesArr, setMoviesArr] = useState<[] | null>(null);
  const dispatch = useDispatch();

  // not sure about this ..
  const movies = useSelector(state => state.moviesReducer.movies);
  const filter = useSelector(state => state.filterReducer.filter);
  const sortBy = useSelector(state => state.filterReducer.sortBy);

  useEffect(() => {
    dispatch(getMoviesDataStart());
  }, []);

  useEffect(() => {
    movies && movies.length > 0 ? setMoviesArr(movies) : null;
  }, [movies]);

  const getMoviesQ = useCallback(() => {
   !!moviesArr ? setQ(moviesArr.length) : null;
  }, [moviesArr])


  useEffect(() => {
    getMoviesQ();
  }, [moviesArr])

  useEffect(() => {
    if (filter && filter.length > 0) {
      const filteredArr = movies.filter((el: IMovie) => el.category === filter);
      setMoviesArr(filteredArr);

      if (filter === 'all') {
        setMoviesArr(movies);
      }
    }
  }, [filter]);

  // change it with next code refactoring
  Array.prototype.sortByF = function(p) {
    return [...this].sort(function(a,b) {
      return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
    });
  }

  useEffect(() => {

    if (sortBy && sortBy === 'release date') {
      const sortedArr = movies.sortByF('year')
      setMoviesArr(sortedArr);
    } else {
      const sortedArr = movies.sortByF('name')
      setMoviesArr(sortedArr);
    }
  }, [sortBy]);

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

