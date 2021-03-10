import React, { useState } from "react";
import { MovieMenuStyled, MovieMenuUl, MovieMenuLi } from "./movieMenu.styled";
import { useEditMovieContext } from "../../../context/editMovieContext";
import { useDeleteMovieContext } from "../../../context/deleteMovieContext";


const MovieMenu = () => {

  const [isClicked, setIsClicked] = useState<boolean>(false);
  let { setEditPopupShown } = useEditMovieContext();
  let { setDeletePopupShown } = useDeleteMovieContext();

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
              {/*ts issues here can't resolve*/}
              <button onClick={setEditPopupShown}>Edit</button>
            </MovieMenuLi>
            <MovieMenuLi>
              <button onClick={setDeletePopupShown}>Remove</button>
            </MovieMenuLi>
          </MovieMenuUl>
          :
          <></>
      }
    </>
  )
};

export default MovieMenu;
