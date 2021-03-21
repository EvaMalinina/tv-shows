import React, { useState } from "react";
import { MovieMenuStyled, MovieMenuUl, MovieMenuLi } from "./movieMenu.styled";
import {controlPopupVisibility} from "../../filmPopups/store/actions";
import {useDispatch} from "react-redux";


const MovieMenu = () => {

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
  };

  const onDeleteDialogOpen = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    dispatch(
        controlPopupVisibility('remove', true)
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
