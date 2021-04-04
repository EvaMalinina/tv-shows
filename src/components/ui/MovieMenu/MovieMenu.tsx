import React, { useState } from "react";
import { MovieMenuStyled, MovieMenuUl, MovieMenuLi } from "./movieMenu.styled";
import {controlPopupVisibility} from "../../filmPopups/storePopups/actions";
import {useDispatch} from "react-redux";
import {getSingleMovieData} from "../../filmPopups/storeMovie/actions";
import {IMovie} from "../../../store/interfaces";



const MovieMenu = ({data}: {data: IMovie}) => {

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  }

  const dispatch = useDispatch();
  const onEditDialogOpen = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    dispatch(
      controlPopupVisibility('edit', true)
    )
    dispatch(
        getSingleMovieData(data)
    )
  };

  const onDeleteDialogOpen = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    dispatch(
        controlPopupVisibility('remove', true)
    )
    dispatch(
        getSingleMovieData(data)
    )
  };

  return (
    <>
      <MovieMenuStyled onClick={handleClick}>
        :
      </MovieMenuStyled>
      {
        isClicked ?
          <MovieMenuUl onMouseLeave={handleClick}>
            <MovieMenuLi>
              <button onClick={onEditDialogOpen}>Edit</button>
            </MovieMenuLi>
            <MovieMenuLi>
              <button onClick={onDeleteDialogOpen}>Remove</button>
            </MovieMenuLi>
          </MovieMenuUl>
          :
          <></>
      }
    </>
  )
};

export default MovieMenu;
