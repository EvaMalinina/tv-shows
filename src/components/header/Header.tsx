import * as React from "react";
import { useEffect, useRef } from "react";
import {
  HeaderC,
  Container,
  ContainerColumn,
  InputSearchMovie,
  BtnAddMovie,
  BtnSearchMovie,
  ContainerSpaceBetween
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
      <ContainerColumn>
        <ContainerSpaceBetween>
          <Logo/>
          <BtnAddMovie>+ Add Movie</BtnAddMovie>
        </ContainerSpaceBetween>

        <Title/>

        <Container>
          <InputSearchMovie
            placeholder="What do you want to watch?"
            ref={inputRef}
            type="text"
          />
          <BtnSearchMovie
            onClick={searchMovie}
          >Search
          </BtnSearchMovie>
        </Container>
      </ContainerColumn>
    </HeaderC>
  );
};

export default Header;
