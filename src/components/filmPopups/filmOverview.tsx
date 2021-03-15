import React from "react";
import {BtnPopupClose, FilmInfo, FilmOverviewPopup, FilmPoster} from "./filmPopups.styled";
import {Container, ContainerColumn, ContainerRow} from "../../styles/general";
import { actionControlVisibility, useDispatch, useSelector } from "../../context/modalMovieContext";
import { ILabel } from "../home/Home";


const FilmOverview = ({labels, type}: {labels: ILabel, type: string}) => {

    const visible = useSelector(({[type]: visibility}) => visibility),
        dispatch = useDispatch(),
        onClose = () => dispatch(actionControlVisibility(type, false))

    return !!visible && (
        <FilmOverviewPopup>
            <Container>
                <BtnPopupClose onClick={onClose}>Search</BtnPopupClose>
                <ContainerRow>
                    <FilmPoster>
                        <img src={labels.img} alt="film-poster" style={{ width: '100%', height: '300px'}}/>
                    </FilmPoster>
                    <FilmInfo>
                        <ContainerColumn>
                            <div>
                                <h2>{labels.mainTitle}</h2>
                                <div>{labels.rating}</div>
                            </div>
                            <p>{labels.title}</p>
                            <div>
                                <span>{labels.date}</span>
                                <span>{labels.runtime} min</span>
                            </div>
                            <p>{labels.overview}</p>
                        </ContainerColumn>
                    </FilmInfo>
                </ContainerRow>
            </Container>
        </FilmOverviewPopup>
    );
};

export default FilmOverview;