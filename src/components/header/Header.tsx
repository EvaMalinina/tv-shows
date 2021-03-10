import React, {useState} from "react";
import { useEffect, useRef } from "react";
import axios from "axios";
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
  BtnSearchMovie
} from "./header.styled";
import Title from "../ui/Title/Title";
import Logo from "../ui/Logo/Logo";
import { useAddMovieContext } from "../../context/addMovieContext";

interface IMovie {
  name: string,
  desc: string,
  year: number
}

const Header = () => {
  let { setAddPopupShown } = useAddMovieContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [ movie, setMovie ] = useState<IMovie | null>({
    name: "Movie from react",
    desc: "Desc from react",
    year: 1996
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const addMovie = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    axios.post(`http://localhost:9000/movie`, movie)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const searchMovie = () => {
    console.log('search')
  }

  return (
    <HeaderC>
      <Container>
        <ContainerColumn>
          <ContainerSpaceBetween>
            <WrapperPlaceForward>
              <Logo/>
            </WrapperPlaceForward>
            <BtnAddMovie onClick={setAddPopupShown}>+ Add Movie</BtnAddMovie>
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
