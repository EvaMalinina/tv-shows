import React, {useState} from "react";
import { MovieMenuStyled, MovieMenuUl, MovieMenuLi } from "./movieMenu.styled";


const MovieMenu = ({showEditMoviePopup, showDeleteMoviePopup}) => {

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
              <button onClick={showEditMoviePopup}>Edit</button>
            </MovieMenuLi>
            <MovieMenuLi>
              <button onClick={showDeleteMoviePopup}>Remove</button>
            </MovieMenuLi>
          </MovieMenuUl>
          :
          <></>
      }
    </>
  )
};

export default MovieMenu;
