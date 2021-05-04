import React, { useState } from "react";
import { useEffect } from "react";
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
import {Link, useParams} from "react-router-dom";
import {getMoviesDataStart, searchMovie} from "../films/components/filmsList/store/actions";

interface ITitle {
  titleValue: string
}

const Header = () => {
  const [titleValue, setTitleValue] = useState<string>('');
  const dispatch = useDispatch();
  const onAddDialogOpen = () => {
    dispatch(controlPopupVisibility('add', true));
  };

  const visible = useSelector(({popupsReducer: {filmOverview: visibility}}: IFilmPopupVisibility) => visibility);

  const title: ITitle = useParams();

  useEffect(() => {
    if(title) {
      dispatch(searchMovie(title.titleValue))
    }
  }, [title])

  useEffect(() => {
    if (titleValue !== '') {
      dispatch(getMoviesDataStart())
    }
  }, [titleValue])

  const findMovie = () => {
    dispatch(searchMovie(titleValue));
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
                        value={titleValue}
                        onChange={e => setTitleValue(e.target.value)}
                        type="text"
                    />
                    <Link to={`/search/${titleValue}`}>
                      <BtnSearchMovie onClick={findMovie} disabled={titleValue ? false : true}>
                        Search
                      </BtnSearchMovie>
                    </Link>
                  </ContainerRow>
                </ContainerColumn>
              </Container>
            </HeaderPadding>
        }
      </HeaderC>
  );
};

export default Header;
