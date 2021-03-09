import React, {useState} from "react";
import { MovieMenuStyled, MovieMenuUl, MovieMenuLi } from "./movieMenu.styled";


const MovieMenu = () => {

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <MovieMenuStyled onClick={handleClick}>
        :
      </MovieMenuStyled>
      {
        isClicked ?
          <MovieMenuUl>
            <MovieMenuLi>
              <button>Edit</button>
            </MovieMenuLi>
            <MovieMenuLi>
              <button>Remove</button>
            </MovieMenuLi>
            <MovieMenuLi>
              <button>Decline</button>
            </MovieMenuLi>
          </MovieMenuUl>
          :
          <></>
      }
    </>
  )
};

export default MovieMenu;
