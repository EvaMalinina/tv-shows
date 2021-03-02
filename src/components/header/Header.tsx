import React from "react";
import { useEffect, useRef } from "react";
import {
  Container,
  ContainerRow,
  ContainerColumn,
  ContainerSpaceBetween
} from "../../styles/general";
import {
  HeaderC,
  InputSearchMovie,
  BtnAddMovie,
  BtnSearchMovie
} from "./header.styled";
import Title from "../ui/Title/Title";
import Logo from "../ui/Logo/Logo";


const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const searchMovie = () => {
    console.log('search')
  }

  return (
    <HeaderC>
      <Container>
        <ContainerColumn>
          <ContainerSpaceBetween>
            <Logo/>
            <BtnAddMovie>+ Add Movie</BtnAddMovie>
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
    </HeaderC>
  );
};

export default Header;
