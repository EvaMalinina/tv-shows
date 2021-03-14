import React, { useState } from "react";
import { MovieMenuStyled, MovieMenuUl, MovieMenuLi } from "./movieMenu.styled";
import { actionControlVisibility, useDispatch } from "../../../context/modalMovieContext";


const MovieMenu = () => {
  const dispatch = useDispatch(),
        onEditDialogOpen = () => dispatch(
            actionControlVisibility('edit', true)
        ),

        onDeleteDialogOpen = () => dispatch(
          actionControlVisibility('remove', true)
        )

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  }

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
