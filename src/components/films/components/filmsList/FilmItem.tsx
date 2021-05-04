import React from "react";
import { ContainerColumn } from "../../../../styles/general";
import { Movie } from "./filmsList.styled";
import MovieMenu from "../../../ui/MovieMenu/MovieMenu";
import {useDispatch} from "react-redux";
import {controlPopupVisibility} from "../../../filmPopups/storePopups/actions";
import {IMovie} from "../../../../store/interfaces";
import {getSingleMovieData} from "../../../filmPopups/storeMovie/actions";
import {Link} from "react-router-dom";


const FilmsItemC = ({movieId, name, desc, category, year, img, runtime}: IMovie) => {
  const dispatch = useDispatch();
  const onFilmOverviewOpen = () => {
    dispatch(
        controlPopupVisibility('filmOverview', true)
    )
    dispatch(
        getSingleMovieData({movieId, name, desc, category, year, img, runtime})
    )
  };
  const defaultPoster = 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9556d16312333.5691dd2255721.jpg'

  return name && (
      <Link to={`/movie/${movieId}`}>
        <Movie onClick={onFilmOverviewOpen}>
          <ContainerColumn>
            <img src={img ? img : defaultPoster} style={{ width: '100%', height: '300px'}} />
            <MovieMenu data={{movieId, name, desc, category, year, img, runtime}}/>
            <h4 style={{textTransform: "capitalize"}}>{name}</h4>
            <p>{desc}</p>
            <span>{year}</span>
          </ContainerColumn>
        </Movie>
      </Link>
  )
}

export default FilmsItemC;

