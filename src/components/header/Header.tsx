import React, { useState } from "react";
import { useEffect, useRef } from "react";
import {
  Container,
  ContainerRow,
  ContainerColumn,
  ContainerSpaceBetween,
  WrapperPlaceForward
} from "../../styles/general";
import {
  HeaderC,
  InputSearchMovie,
  BtnAddMovie,
  BtnSearchMovie, HeaderPadding
} from "./header.styled";
import Title from "../ui/Title/Title";
import Logo from "../ui/Logo/Logo";
import FilmOverview from "../filmPopups/FilmOverview";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "../filmPopups/storePopups/actions";
import {IFilmPopupVisibility} from "../../store/interfaces";

interface IMovie {
  name: string,
  desc: string,
  year: number
}


const Header = () => {
  const dispatch = useDispatch();
  const onAddDialogOpen = () => {
    dispatch(controlPopupVisibility('add', true))
  };

  const visible = useSelector(({popupsReducer: {filmOverview: visibility}}: IFilmPopupVisibility) => visibility);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [movie, setMovie] = useState<IMovie | null>({
    name: "Movie from react",
    desc: "Desc from react",
    year: 1996
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const searchMovie = () => {
    console.log('will be implemented soon')
  }

  return (
      <HeaderC>
        {
          visible ?
            <FilmOverview type="filmOverview"/>
            :
            <HeaderPadding>
              <Container>
                <ContainerColumn>
                  <ContainerSpaceBetween>
                    <WrapperPlaceForward>
                      <Logo/>
                    </WrapperPlaceForward>
                    <BtnAddMovie onClick={onAddDialogOpen}>+ Add Movie</BtnAddMovie>
                  </ContainerSpaceBetween>

                  <Title/>

                  <ContainerRow>
                    <InputSearchMovie
                        placeholder="What do you want to watch?"
                        ref={inputRef}
                        type="text"
                    />
                    <BtnSearchMovie
                        onClick={searchMovie}
                    >Search
                    </BtnSearchMovie>
                  </ContainerRow>
                </ContainerColumn>
              </Container>
            </HeaderPadding>
        }
      </HeaderC>
  );
};

export default Header;
