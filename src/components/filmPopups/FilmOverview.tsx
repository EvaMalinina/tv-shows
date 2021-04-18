import React from "react";
import {
  BtnPopupClose,
  FilmInfo,
  FilmInfoColorRed,
  FilmOverviewPopup,
  FilmPoster,
  SearchIcon,
  Subtitle
} from "./filmPopups.styled";
import {Container, ContainerColumn, ContainerRow, ContainerRowAlignStart} from "../../styles/general";
import {IType} from "./interfaces";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "./storePopups/actions";
import {IFilmPopupVisibility} from "../../store/interfaces";
import {Link} from "react-router-dom";


const FilmOverview = ({type}: IType) => {

  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility)

  const dispatch = useDispatch();
  const onClose = () => dispatch(controlPopupVisibility(type, false));
  const movieData = useSelector(state => state.singleMovieReducer.movie);
  const defaultRating = 4.6;

  return visible  &&(
      <FilmOverviewPopup>
        <Container>
          <Link to={`/`}>
            <BtnPopupClose onClick={onClose}>
              <SearchIcon/>
            </BtnPopupClose>
          </Link>

          <ContainerRowAlignStart>
            <FilmPoster>
              <img src={movieData.img} alt="film-poster" style={{width: '100%', height: '300px'}}/>
            </FilmPoster>
            <FilmInfo>
              <ContainerColumn>
                <ContainerRow>
                  <h2>{movieData.name}</h2>
                  <div>{movieData.rating ? movieData.rating : defaultRating}</div>
                </ContainerRow>
                <Subtitle>Read about movie</Subtitle>
                <ContainerRow>
                  <FilmInfoColorRed>{movieData.year}</FilmInfoColorRed>
                  <FilmInfoColorRed>{movieData.runtime} min</FilmInfoColorRed>
                </ContainerRow>
                <p>{movieData.overview}</p>
              </ContainerColumn>
            </FilmInfo>
          </ContainerRowAlignStart>
        </Container>
      </FilmOverviewPopup>
  );
};

export default FilmOverview;