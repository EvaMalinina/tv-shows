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
import {actionControlVisibility, useDispatch, useSelector} from "../../context/modalMovieContext";
import {IPopupProps} from "./interfaces";


const FilmOverview = ({labels, type}: IPopupProps) => {

  const visible = useSelector(({[type]: visibility}) => visibility),
      dispatch = useDispatch(),
      onClose = () => dispatch(actionControlVisibility(type, false))

  return visible && (
      <FilmOverviewPopup>
        <Container>
          <BtnPopupClose onClick={onClose}>
            <SearchIcon/>
          </BtnPopupClose>
          <ContainerRowAlignStart>
            <FilmPoster>
              <img src={labels.img} alt="film-poster" style={{width: '100%', height: '300px'}}/>
            </FilmPoster>
            <FilmInfo>
              <ContainerColumn>
                <ContainerRow>
                  <h2>{labels.mainTitle}</h2>
                  <div>{labels.rating}</div>
                </ContainerRow>
                <Subtitle>{labels.title}</Subtitle>
                <ContainerRow>
                  <FilmInfoColorRed>{labels.date}</FilmInfoColorRed>
                  <FilmInfoColorRed>{labels.runtime} min</FilmInfoColorRed>
                </ContainerRow>
                <p>{labels.overview}</p>
              </ContainerColumn>
            </FilmInfo>
          </ContainerRowAlignStart>
        </Container>
      </FilmOverviewPopup>
  );
};

export default FilmOverview;