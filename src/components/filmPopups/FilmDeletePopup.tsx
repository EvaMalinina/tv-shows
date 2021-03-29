import React, {useState} from "react";
import {Bg, BgForm, Form, BtnPopupClose, BtnSubmit} from "./filmPopups.styled";
import {Container} from "../../styles/general";
import {IType} from "./interfaces";
import {useDispatch, useSelector} from "react-redux";
import {controlPopupVisibility} from "./store/actions";
import {IFilmPopupVisibility} from "../../store/interfaces";
import axios from "axios";
import {baseUrl} from "../../url";
import {getMoviesDataStart} from "../films/components/filmsList/store/actions";


const FilmDeletePopup = ({type}: IType) => {

  // having troubles typing props here
  const visible = useSelector(({popupsReducer: {[type]: visibility}}: IFilmPopupVisibility) => visibility);

  const dispatch = useDispatch();
  const onClose = () => dispatch(controlPopupVisibility(type, false));

  const movieData = useSelector(state => state.singleMovieReducer.movie);


  const deleteFilm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    axios.delete(`${baseUrl}movie/${movieData.movieId}`)
        .then((res) => {
          onClose();
          dispatch(getMoviesDataStart());
        })
        .catch((err) => {
          if (err.response) {
            alert('Error: '+ err.response.data);
          }
        })
  };

  return !!visible && (
    <Bg>
      <BgForm>
        <Container>
          <Form>
            <BtnPopupClose onClick={onClose}>&#10005;</BtnPopupClose>
            <h2>delete movie</h2>
            <p>Are you sue you want to delete this movie?</p>
            <BtnSubmit onClick={deleteFilm}>Confirm</BtnSubmit>
          </Form>
        </Container>
      </BgForm>
    </Bg>
  );
};

export default FilmDeletePopup;
